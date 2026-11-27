
export default function handler(req, res) {
  const checks = {
    supabaseUrl: Boolean(process.env.SUPABASE_URL),
    publishableKey: Boolean(process.env.SUPABASE_ANON_KEY),
    secretKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY)
  };

  const ready = Object.values(checks).every(Boolean);

  return res.status(ready ? 200 : 500).json({
    success: ready,
    message: ready
      ? "ROFI Studio backend configuration is ready."
      : "Some environment variables are missing.",
    checks
  });
}
