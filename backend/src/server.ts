import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database';

const app = express();

const port = normalizePort(process.env.PORT || '3333');
app.set('port', port);


app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Funcionado o servidor na porta ${port}`);
});

function normalizePort(val : string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
