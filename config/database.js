module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        // uri: env('DATABASE_URI'),
        host: env('DATABASE_HOST', 'teste-strapi.wvnih.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'mongo-test'),
        username: env('DATABASE_USERNAME', 'dbstrapi_teste'),
        password: env('DATABASE_PASSWORD', 'pcjJjFINq0OHZiTB'),
      },
      options: {
        // ssl: true,
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
