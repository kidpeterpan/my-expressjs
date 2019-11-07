const http = require('http'); // http is core node module

const server = http.createServer((req,res)=> {
   const {headers, url,method} = req;
   console.log(headers, url, method); 
   res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));