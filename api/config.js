
export default function handler(req, res) {
  const url = process.env.SUPABASE_URL;
  const publishableKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !publishableKey) {
    return res.status(500).json({
      success: false,
      message: "Supabase public configuration is missing."
    });
  }

  res.setHeader("Cache-Control", "no-store");

  return res.status(200).json({
    success: true,
    supabaseUrl: url,
    publishableKey
  });
}
