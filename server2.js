const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Use the standard WHATWG URL API
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const path = parsedUrl.pathname;
  const searchParams = parsedUrl.searchParams;

  console.log(`Request received: ${req.method} ${path}`);

  // Ignore automatic browser favicon requests
  if (path === '/favicon.ico') {
    res.statusCode = 204;
    return res.end();
  }

  // ---------- ROUTE 1: Home page ----------
  if (path === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome! Try /greet?name=Rahul or /headers or POST to /data');
  }
  // ---------- ROUTE 2: Query parameters ----------
  else if (path === '/greet' && req.method === 'GET') {
    const name = searchParams.get('name') || 'Guest';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, ${name}! Welcome to the server.`);
  }
  // ---------- ROUTE 3: Show request headers ----------
  else if (path === '/headers' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.headers, null, 2));
  }
  // ---------- ROUTE 4: Handle POST data ----------
  else if (path === '/data' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        message: 'Data received successfully',
        yourData: body
      }));
    });

    req.on('error', () => {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Failed to read request body' }));
    });
  }
  // ---------- ROUTE 5: Custom status code demo ----------
  else if (path === '/error') {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Simulated server error (500)');
  }
  // ---------- DEFAULT: Route not found ----------
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Page Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});