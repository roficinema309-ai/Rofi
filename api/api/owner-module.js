import {requireOwner,json} from './_auth.js';

const MODULES={
  ads:{title:'ROFI Ads',description:'إدارة محرك الإعلانات والإنتاج التجاري.',checks:['ads_enabled','image_engine_enabled','video_engine_enabled']},
  cinema:{title:'ROFI Cinema',description:'إدارة محرك القصص والأفلام والمشاهد.',checks:['cinema_enabled','video_engine_enabled']},
  video:{title:'Video Engine',description:'إدارة مزود الفيديو ونموذج التوليد.',checks:['video_engine_enabled']},
  voice:{title:'Voice Engine',description:'إدارة التعليق الصوتي والحوار والمزامنة.',checks:['voice_engine_enabled']},
  guard:{title:'Islamic Content Guard',description:'طبقة الحماية الشرعية المطلوبة قبل وبعد التوليد.',checks:['islamic_guard_enabled']},
  router:{title:'Model Router',description:'اختيار وتوجيه طلبات الإنتاج إلى مزودي النماذج.',checks:[]}
};

export default async function handler(req,res){
  if(req.method!=='GET') return json(res,405,{success:false,message:'Method not allowed.'});
  try{
    const auth=await requireOwner(req,res);
    if(!auth || !auth.user) return;
    const key=String(req.query?.module||'');
    const module=MODULES[key];
    if(!module) return json(res,400,{success:false,message:'Unknown owner module.'});

    const settingsResponse=await (async()=>{
      const base=process.env.SUPABASE_URL;
      const service=process.env.SUPABASE_SERVICE_ROLE_KEY;
      return fetch(`${base}/rest/v1/owner_settings?select=ads_enabled,cinema_enabled,image_engine_enabled,video_engine_enabled,voice_engine_enabled,islamic_guard_enabled,default_language,updated_at&limit=1`,{
        headers:{apikey:service,Authorization:`Bearer ${service}`}
      });
    })();
    if(!settingsResponse.ok) return json(res,500,{success:false,message:'Unable to read owner settings.'});
    const rows=await settingsResponse.json();
    const settings=rows[0]||null;
    return json(res,200,{success:true,module:module,settings,verifiedUser:{id:auth.user.id,role:auth.profile.role}});
  }catch(error){
    return json(res,500,{success:false,message:error.message||'Owner module error.'});
  }
}
