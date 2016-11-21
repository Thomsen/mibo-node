// import * as http from 'http';

// const server = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Hello World!\n');

// });

// const port = 8000;

// server.listen(port);
// console.log('Listening on http://localhost:' + port);

import * as express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello World'));


const server = app.listen(8000, "localhost", () => { // 3

  const {address, port} = server.address(); // 4
  console.log('Listening on http://localhost:' + port);
});
