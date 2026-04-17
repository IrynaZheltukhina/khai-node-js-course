import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from './schema';

const client = new Client({
   host: '127.0.0.1',
   port: 5432,
   user: 'iryna',
   password: 'irynapwd',
   database: 'nodejs_course_database',
});

await client.connect();
export const db = drizzle(client, { schema });