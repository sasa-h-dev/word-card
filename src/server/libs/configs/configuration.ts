export const config = {
  production: process.env.NODE_ENV === 'production',

  postgres: {
    url: process.env.DATABASE_URL,
    scheme: process.env.DATABASE_SCHEMA,
    ssl: process.env.DATABASE_SSL === 'true',
    logging: process.env.NODE_ENV !== 'production',
  },
};
