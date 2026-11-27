
import { requireOwner, json } from './_auth.js';

const MODULES = {
  ads: {
    title: 'ROFI Ads',
    description: 'إدارة محرك الإعلانات والإنتاج التجاري.',
    checks: ['ads_enabled', 'image_engine_enabled', 'video_engine_enabled']
  },
  cinema: {
    title: 'ROFI Cinema',
    description: 'إدارة محرك القصص والأفلام والمشاهد.',
    checks: ['cinema_enabled', 'video_engine_enabled']
  },
  video: {
    title: 'Video Engine',
    description: 'إدارة مزود الفيديو ونموذج التوليد.',
    checks: ['video_engine_enabled']
  },
  voice: {
    title: 'Voice Engine',
    description: 'إدارة التعليق الصوتي والحوار والمزامنة.',
    checks: ['voice_engine_enabled']
  },
  guard: {
    title: 'Islamic Content Guard',
    description: 'طبقة الحماية الشرعية قبل وبعد التوليد.',
    checks: ['islamic_guard_enabled']
  },
  router: {
    title: 'Model Router',
    description: 'اختيار وتوجيه طلبات الإنتاج إلى مزودي النماذج.',
    checks: []
  }
};

const ALLOWED_SETTINGS = [
  'ads_enabled',
  'cinema_enabled',
  'image_engine_enabled',
  'video_engine_enabled',
  'voice_engine_enabled',
  'islamic_guard_enabled'
];

const SELECT_FIELDS = [
  'id',
  ...ALLOWED_SETTINGS,
  'default_language',
  'updated_at'
].join(',');

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error('Server configuration is incomplete.');
  }

  return {
    url: url.replace(/\/$/, ''),
    key
  };
}

async function supabaseRequest(path, options = {}) {
  const { url, key } = getSupabaseConfig();

  return fetch(`${url}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });
}

async function readSettings() {
  const response = await supabaseRequest(
    `owner_settings?select=${SELECT_FIELDS}&limit=2`
  );

  if (!response.ok) {
    throw new Error('Unable to read owner settings.');
  }

  const rows = await response.json();

  if (rows.length > 1) {
    throw new Error('Multiple owner settings records found.');
  }

  return rows[0] || null;
}

async function updateSettings(settings) {
  const current = await readSettings();

  if (!current || !current.id) {
    throw new Error('Owner settings record is missing.');
  }

  const response = await supabaseRequest(
    `owner_settings?id=eq.${encodeURIComponent(current.id)}&select=${SELECT_FIELDS}`,
    {
      method: 'PATCH',
      headers: {
        Prefer: 'return=representation'
      },
      body: JSON.stringify({
        ...settings,
        updated_at: new Date().toISOString()
      })
    }
  );

  if (!response.ok) {
    throw new Error('Unable to update owner settings.');
  }

  const rows = await response.json();

  if (rows.length !== 1) {
    throw new Error('Owner settings update was not confirmed.');
  }

  return rows[0];
}

export default async function handler(req, res) {
  try {
    if (!['GET', 'PATCH'].includes(req.method)) {
      return json(res, 405, {
        success: false,
        message: 'Method not allowed.'
      });
    }

    const auth = await requireOwner(req, res);

    if (!auth || !auth.user) return;

    const key = String(req.query?.module || '');
    const module = MODULES[key];

    if (!module) {
      return json(res, 400, {
        success: false,
        message: 'Unknown owner module.'
      });
    }

    if (req.method === 'GET') {
      const settings = await readSettings();

      return json(res, 200, {
        success: true,
        module,
        settings,
        verifiedUser: {
          id: auth.user.id,
          role: auth.profile.role
        }
      });
    }

    const body = req.body || {};
    const changes = body.settings;

    if (
      !changes ||
      typeof changes !== 'object' ||
      Array.isArray(changes)
    ) {
      return json(res, 400, {
        success: false,
        message: 'Invalid settings payload.'
      });
    }

    const keys = Object.keys(changes);

    if (!keys.length || keys.some(
      key => !ALLOWED_SETTINGS.includes(key)
    )) {
      return json(res, 400, {
        success: false,
        message: 'Unsupported setting.'
      });
    }

    if (keys.some(key => typeof changes[key] !== 'boolean')) {
      return json(res, 400, {
        success: false,
        message: 'Settings must be boolean values.'
      });
    }

    const settings = await updateSettings(changes);

    return json(res, 200, {
      success: true,
      message: 'Owner settings updated.',
      module,
      settings
    });

  } catch (error) {
    console.error('Owner module error:', error);

    return json(res, 500, {
      success: false,
      message: 'Owner module operation failed.'
    });
  }
}
