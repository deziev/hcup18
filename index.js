const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async (_request, reply) => {
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ hello: 'world' });
});

fastify.listen(3000, (err, address) => {
  if (err) throw err
})