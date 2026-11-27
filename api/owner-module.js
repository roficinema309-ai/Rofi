
const MODULES = {
  ads: {
    title: "ROFI Ads",
    description: "إدارة محرك صناعة الإعلانات التجارية."
  },
  cinema: {
    title: "ROFI Cinema",
    description: "إدارة صناعة الأفلام والمشاهد السينمائية."
  },
  video: {
    title: "Video Engine",
    description: "إدارة محرك توليد الفيديو."
  },
  voice: {
    title: "Voice Engine",
    description: "إدارة التعليق الصوتي والحوار."
  },
  guard: {
    title: "Islamic Content Guard",
    description: "إدارة طبقة الحماية من المحتوى المخالف."
  },
  router: {
    title: "Model Router",
    description: "إدارة توجيه طلبات التوليد إلى النماذج."
  }
};

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET" && req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({
      success: false,
      error: "Method not allowed"
    });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !anonKey || !serviceKey) {
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
    // Verify the user's access token with Supabase Auth.
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

    const user = await authResponse.json();

    if (!user.id) {
      return res.status(401).json({
        success: false,
        error: "Unable to identify user"
      });
    }

    // Read the role from the protected profiles table.
    const profileResponse = await fetch(
      `${supabaseUrl}/rest/v1/profiles?id=eq.${encodeURIComponent(user.id)}&select=role`,
      {
        headers: {
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`
        }
      }
    );

    if (!profileResponse.ok) {
      return res.status(500).json({
        success: false,
        error: "Could not verify account permissions"
      });
    }

    const profiles = await profileResponse.json();
    const profile = profiles?.[0];

    if (!profile || profile.role !== "owner") {
      return res.status(403).json({
        success: false,
        error: "Owner access only"
      });
    }

    const moduleId =
      req.method === "GET"
        ? req.query?.module
        : req.body?.module;

    if (moduleId) {
      const moduleInfo = MODULES[moduleId];

      if (!moduleInfo) {
        return res.status(400).json({
          success: false,
          error: "Unknown module"
        });
      }

      return res.status(200).json({
        success: true,
        ownerVerified: true,
        module: moduleId,
        details: moduleInfo,
        integrationStatus: "not_connected"
      });
    }

    return res.status(200).json({
      success: true,
      ownerVerified: true,
      message: "Owner access verified",
      modules: MODULES
    });

  } catch (error) {
    console.error("Owner module API error:", error);

    return res.status(500).json({
      success: false,
      error: "Internal server error"
    });
  }
}
