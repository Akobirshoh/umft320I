// Test script — runs all API endpoints and logs results

async function runTests() {
  const baseUrl = 'http://127.0.0.1:8000';
  
  const tests = [
    // Health check
    { method: 'GET', path: '/health', params: null, body: null },
    
    // Ilyas (c2) — гипотенуза
    { method: 'GET', path: '/c2', params: { x: 3, y: 4 }, body: null },
    { method: 'POST', path: '/c2', params: null, body: { x: 3, y: 4 } },
    
    // Inoyatov — деление
    { method: 'GET', path: '/inoyatov', params: { x: 25, y: 5 }, body: null },
    { method: 'POST', path: '/inoyatov', params: null, body: { x: 25, y: 5 } },
    
    // Kostin — сравнение
    { method: 'GET', path: '/konstantin', params: { x: 3, y: 7 }, body: null },
    { method: 'POST', path: '/konstantin', params: null, body: { x: 3, y: 7 } },
    
    // Shakirjanov (p1) — main focus
    { method: 'GET', path: '/Shakirjanov', params: { x: 2, y: 3 }, body: null },
    { method: 'POST', path: '/Shakirjanov', params: null, body: { x: 2, y: 3 } },
    
    // Soliyev (project320) — main focus
    { method: 'GET', path: '/soliyev', params: { x: 4, y: 5 }, body: null },
    { method: 'POST', path: '/soliyev', params: null, body: { x: 4, y: 5 } },
  ];
  
  console.log('=== API Test Suite ===\n');
  
  for (const test of tests) {
    const { method, path, params, body } = test;
    
    try {
      let url = new URL(baseUrl + path);
      if (params) {
        Object.keys(params).forEach(k => url.searchParams.append(k, params[k]));
      }
      
      const options = {
        method,
        headers: { 'Content-Type': 'application/json' }
      };
      if (body) options.body = JSON.stringify(body);
      
      const res = await fetch(url.toString(), options);
      const data = await res.json();
      
      console.log(`✓ ${method} ${path}`);
      console.log(`  Status: ${res.status}`);
      console.log(`  Response:`, data);
      console.log('');
      
    } catch (err) {
      console.log(`✗ ${method} ${path}`);
      console.log(`  Error: ${err.message}`);
      console.log('');
    }
  }
  
  console.log('=== Test Complete ===');
}

// Run tests
runTests();
