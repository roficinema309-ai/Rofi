import {requireOwner,json,supabaseFetch} from './_auth.js';

export default async function handler(req,res){
  if(req.method!=='POST') return json(res,405,{success:false,message:'Method not allowed.'});
  try{
    const auth=await requireOwner(req,res);
    if(!auth || !auth.user) return;
    const body=typeof req.body==='string' ? JSON.parse(req.body||'{}') : (req.body||{});
    const text=String(body.prompt||body.script||body.description||'').trim();
    const hasAsset=Boolean(body.hasAsset);
    const base=process.env.SUPABASE_URL;
    const service=process.env.SUPABASE_SERVICE_ROLE_KEY;
    const settingsResponse=await supabaseFetch('/rest/v1/owner_settings?select=islamic_guard_enabled&limit=1');
    if(!settingsResponse.ok) return json(res,500,{success:false,message:'Unable to read guard settings.'});
    const settingsRows=await settingsResponse.json();
    const enabled=settingsRows[0]?.islamic_guard_enabled!==false;

    // Server-side gate: this endpoint intentionally does not generate content.
    // It establishes the mandatory policy checkpoint before any provider call is added.
    if(!enabled) return json(res,403,{success:false,blocked:true,code:'GUARD_DISABLED',message:'Islamic Content Guard must remain enabled before generation.'});
    if(!text && !hasAsset) return json(res,400,{success:false,blocked:true,code:'EMPTY_INPUT',message:'Provide a prompt, script, description, or asset before generation.'});

    return json(res,200,{success:true,blocked:false,guard:{enabled:true,stage:'preflight',providerScan:'not_configured'},message:'Server-side preflight passed. Provider moderation has not yet been configured.'});
  }catch(error){
    return json(res,500,{success:false,message:error.message||'Guard preflight error.'});
  }
}
