async function requestGet(path, params){
  const url = new URL(path, window.location.origin);
  Object.keys(params).forEach(k => url.searchParams.append(k, params[k]));
  const res = await fetch(url.toString());
  return res.json();
}

async function requestPost(path, body){
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
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
    const data = await requestGet('/konst', {x,y});
    document.getElementById('kost-result').textContent = JSON.stringify(data, null, 2);
  }catch(e){ document.getElementById('kost-result').textContent = String(e); }
});

document.getElementById('kost-post').addEventListener('click', async ()=>{
  const x = parseFloat(document.getElementById('kost-x').value);
  const y = parseFloat(document.getElementById('kost-y').value);
  try{
    const data = await requestPost('/konst', {x,y});
    document.getElementById('kost-result').textContent = JSON.stringify(data, null, 2);
  }catch(e){ document.getElementById('kost-result').textContent = String(e); }
});
