function json(res,status,body){
  res.status(status).setHeader('Content-Type','application/json; charset=utf-8');
  return res.end(JSON.stringify(body));
}

async function supabaseFetch(path, options={}){
  const base=process.env.SUPABASE_URL;
  const service=process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!base || !service) throw new Error('Server Supabase configuration is missing.');
  return fetch(`${base}${path}`,{
    ...options,
    headers:{
      apikey:service,
      Authorization:`Bearer ${service}`,
      'Content-Type':'application/json',
      ...(options.headers||{})
    }
  });
}

export async function requireOwner(req,res){
  const auth=req.headers.authorization||'';
  if(!auth.startsWith('Bearer ')) return json(res,401,{success:false,message:'Authentication required.'});
  const accessToken=auth.slice(7).trim();
  if(!accessToken) return json(res,401,{success:false,message:'Authentication required.'});

  const publicKey=process.env.SUPABASE_ANON_KEY;
  const supabaseUrl=process.env.SUPABASE_URL;
  if(!supabaseUrl||!publicKey||!process.env.SUPABASE_SERVICE_ROLE_KEY){
    return json(res,500,{success:false,message:'Server configuration is incomplete.'});
  }

  const userResponse=await fetch(`${supabaseUrl}/auth/v1/user`,{
    headers:{apikey:publicKey,Authorization:`Bearer ${accessToken}`}
  });
  if(!userResponse.ok) return json(res,401,{success:false,message:'Invalid or expired session.'});
  const user=await userResponse.json();

  const profileResponse=await supabaseFetch(`/rest/v1/profiles?id=eq.${encodeURIComponent(user.id)}&select=id,role,full_name,language&limit=1`);
  if(!profileResponse.ok){
    const detail=await profileResponse.text();
    return json(res,500,{success:false,message:'Unable to verify profile role.',detail});
  }
  const profiles=await profileResponse.json();
  const profile=profiles[0];
  if(!profile || profile.role!=='owner') return json(res,403,{success:false,message:'Owner permission required.'});
  return {user,profile};
}

export {json,supabaseFetch};
