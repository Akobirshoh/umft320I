async function requestGet(path, params){
  const url = new URL(path, window.location.origin);
  if (params) Object.keys(params).forEach(k => url.searchParams.append(k, params[k]));
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function requestPost(path, body){
  const url = new URL(path, window.location.origin).toString();
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

document.getElementById('ilyas-get').addEventListener('click', async ()=>{
  const x = parseFloat(document.getElementById('ilyas-x').value);
  const y = parseFloat(document.getElementById('ilyas-y').value);
  try{
    const data = await requestGet('/c2', {x,y});
    document.getElementById('ilyas-result').textContent = JSON.stringify(data, null, 2);
  }catch(e){ document.getElementById('ilyas-result').textContent = String(e); }
});

// health check on load
(async function(){
  const el = document.getElementById('server-status');
  if (!el) return;
  try{
    const r = await requestGet('/health');
    el.textContent = 'Server: online';
    el.style.color = '#0a0';
  }catch(e){
    el.textContent = 'Server: offline';
    el.style.color = '#a00';
  }
})();

document.getElementById('ilyas-post').addEventListener('click', async ()=>{
  const x = parseFloat(document.getElementById('ilyas-x').value);
  const y = parseFloat(document.getElementById('ilyas-y').value);
  try{
    const data = await requestPost('/c2', {x,y});
    document.getElementById('ilyas-result').textContent = JSON.stringify(data, null, 2);
  }catch(e){ document.getElementById('ilyas-result').textContent = String(e); }
});

// Inoyatov
document.getElementById('ino-get').addEventListener('click', async ()=>{
  const x = parseFloat(document.getElementById('ino-x').value);
  const y = parseFloat(document.getElementById('ino-y').value);
  try{
    const data = await requestGet('/inoyatov', {x,y});
    document.getElementById('ino-result').textContent = JSON.stringify(data, null, 2);
  }catch(e){ document.getElementById('ino-result').textContent = String(e); }
});

document.getElementById('ino-post').addEventListener('click', async ()=>{
  const x = parseFloat(document.getElementById('ino-x').value);
  const y = parseFloat(document.getElementById('ino-y').value);
  try{
    const data = await requestPost('/inoyatov', {x,y});
    document.getElementById('ino-result').textContent = JSON.stringify(data, null, 2);
  }catch(e){ document.getElementById('ino-result').textContent = String(e); }
});

// Kostin
document.getElementById('kost-get').addEventListener('click', async ()=>{
  const x = parseFloat(document.getElementById('kost-x').value);
  const y = parseFloat(document.getElementById('kost-y').value);
  try{
    const data = await requestGet('/konstantin', {x,y});
    document.getElementById('kost-result').textContent = JSON.stringify(data, null, 2);
  }catch(e){ document.getElementById('kost-result').textContent = String(e); }
});

document.getElementById('kost-post').addEventListener('click', async ()=>{
  const x = parseFloat(document.getElementById('kost-x').value);
  const y = parseFloat(document.getElementById('kost-y').value);
  try{
    const data = await requestPost('/konstantin', {x,y});
    document.getElementById('kost-result').textContent = JSON.stringify(data, null, 2);
  }catch(e){ document.getElementById('kost-result').textContent = String(e); }
});

// Shakirjanov (p1)
document.getElementById('shak-get').addEventListener('click', async ()=>{
   console.log("yes");
  
  const x = parseFloat(document.getElementById('shak-x').value);
  const y = parseFloat(document.getElementById('shak-y').value);
  try{
    const data = await requestGet('/Shakirjanov', {x,y});
    document.getElementById('shak-result').textContent = JSON.stringify(data, null, 2);
  }catch(e){ document.getElementById('shak-result').textContent = String(e); }
});

document.getElementById('shak-post').addEventListener('click', async ()=>{
   console.log("yes");
  
  const x = parseFloat(document.getElementById('shak-x').value);
  const y = parseFloat(document.getElementById('shak-y').value);
  try{
    const data = await requestPost('/Shakirjanov', {x,y});
    document.getElementById('shak-result').textContent = JSON.stringify(data, null, 2);
  }catch(e){ document.getElementById('shak-result').textContent = String(e); }
});


// Soliyev (project320)
document.getElementById('sol-get').addEventListener('click', async ()=>{
   console.log("yes");
  
  const x = parseFloat(document.getElementById('sol-x').value);
  const y = parseFloat(document.getElementById('sol-y').value);
  try{
    const data = await requestGet('/soliyev', {x,y});
    document.getElementById('sol-result').textContent = JSON.stringify(data, null, 2);
  }catch(e){ document.getElementById('sol-result').textContent = String(e); }
});

document.getElementById('sol-post').addEventListener('click', async ()=>{
  console.log("yes");
  
  const x = parseFloat(document.getElementById('sol-x').value);
  const y = parseFloat(document.getElementById('sol-y').value);
  try{
    const data = await requestPost('/soliyev', {x,y});
    document.getElementById('sol-result').textContent = JSON.stringify(data, null, 2);
  }catch(e){ document.getElementById('sol-result').textContent = String(e); }
});
