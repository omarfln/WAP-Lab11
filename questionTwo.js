const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/image') {
    // Present my image
    res.setHeader('Content-Type', 'image/png'); 
    fs.createReadStream('./img/welcome.jpg').pipe(res);
  } else if (url === '/pdf') {
    // Show my PDF file
    res.setHeader('Content-Type', 'application/pdf');
    fs.createReadStream('./pdf/pdf_file.pdf').pipe(res);
  } else if (url ==='/' || url === '/home') {
    // Show home page text
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to my website');
  } else {
    // Issue an error on other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
