
const BLOCKED_PATTERNS = [
  /\b(nude|nudity|naked|porn|pornography|explicit sexual)\b/i,
  /\b(escort|sexual intercourse|sex scene|fetish)\b/i,
  /\b(undress|undressing|striptease)\b/i,
  /عاري|عارية|إباحي|إباحية|مشهد جنسي|تعري|خلع الملابس|محتوى جنسي صريح/i
];

const MAX_TEXT_LENGTH = 12000;

function inspectText(value) {
  if (typeof value !== "string") {
    return { safe: true };
  }

  const text = value.slice(0, MAX_TEXT_LENGTH);

  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(text)) {
      return { safe: false };
    }
  }

  return { safe: true };
}

function inspectPayload(value, depth = 0) {
  if (depth > 6) {
    return { safe: false, reason: "Payload too deeply nested" };
  }

  if (typeof value === "string") {
    return inspectText(value);
  }

  if (Array.isArray(value)) {
    if (value.length > 100) {
      return { safe: false, reason: "Payload is too large" };
    }

    for (const item of value) {
      const result = inspectPayload(item, depth + 1);
      if (!result.safe) return result;
    }
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value);

    if (entries.length > 100) {
      return { safe: false, reason: "Too many payload fields" };
    }

    for (const [key, item] of entries) {
      const keyResult = inspectText(key);
      if (!keyResult.safe) return keyResult;

      const result = inspectPayload(item, depth + 1);
      if (!result.safe) return result;
    }
  }

  return { safe: true };
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      success: false,
      error: "Method not allowed"
    });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !anonKey) {
    return res.status(500).json({
      success: false,
      error: "Server configuration is incomplete"
    });
  }

  const authorization = req.headers.authorization || "";
  const token = authorization.startsWith("Bearer ")
    ? authorization.slice(7)
    : "";

  if (!token) {
    return res.status(401).json({
      success: false,
      error: "Authentication required"
    });
  }

  try {
    const authResponse = await fetch(
      `${supabaseUrl}/auth/v1/user`,
      {
        headers: {
          apikey: anonKey,
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (!authResponse.ok) {
      return res.status(401).json({
        success: false,
        error: "Invalid or expired session"
      });
    }

    const payload = req.body || {};

    const result = inspectPayload(payload);

    if (!result.safe) {
      return res.status(400).json({
        success: false,
        allowed: false,
        code: "CONTENT_REJECTED",
        message: "هذا الطلب لا يتوافق مع ضوابط المحتوى المعتمدة في ROFI."
      });
    }

    return res.status(200).json({
      success: true,
      allowed: true,
      message: "Preflight check passed",
      note: "This is a preliminary text check, not a complete content moderation system."
    });

  } catch (error) {
    console.error("Guard preflight error:", error);

    return res.status(500).json({
      success: false,
      allowed: false,
      error: "Content check unavailable"
    });
  }
}
