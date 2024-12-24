import Hapi from '@hapi/hapi'

const start = async () => {
  const server = Hapi.server({
    port: 8000,
    host: 'localhost'
  });

  server.route({
    method: 'POST',
    path: '/hello',
    handler: function (request, h) {
      const payload = request.payload;
      const name = payload.name;
      return `Hello ${name}!`;
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

start();
