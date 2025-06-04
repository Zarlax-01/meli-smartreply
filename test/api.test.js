const http = require('http');
const request = require('supertest');
const db = require('../db.json');

let server;

beforeAll(done => {
  const handler = (req, res) => {
    if (req.url === '/smartReply' && req.method === 'GET') {
      const item = db.smartReply.find(e => e.id === '1');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(item));
    } else {
      res.statusCode = 404;
      res.end();
    }
  };
  server = http.createServer(handler).listen(0, done);
});

afterAll(done => {
  server.close(done);
});

test('GET /smartReply returns entry 1', async () => {
  const expected = db.smartReply.find(e => e.id === '1');
  const res = await request(server).get('/smartReply');
  expect(res.status).toBe(200);
  expect(res.body).toEqual(expected);
});
