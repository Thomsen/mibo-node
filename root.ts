import * as express from 'express';
import * as path from 'path';

const app = express();


app.use(express.static(path.join(__dirname, '..')));


const server = app.listen(8000, "localhost", () => {

  const {address, port} = server.address();
  console.log('Listening on http://localhost:' + port);
});
