export default {
   schema: './src/db/schema.js',
   out: './drizzle',
   driver: 'pg',
      dbCredentials: {
       host: '127.0.0.1',
       port: 5432,
       user: 'iryna',
       password: 'irynapwd',
       database: 'nodejs_course_database',
       ssl: false,
   },
};