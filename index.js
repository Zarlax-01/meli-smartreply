const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const routes = require('./routes.json');

const port = process.env.PORT || 10000;

server.use(jsonServer.rewriter(routes));
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`🚀 Méli JSON Server is running on port ${port}`);
});
