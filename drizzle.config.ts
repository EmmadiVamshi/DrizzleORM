import type { Config } from 'drizzle-kit';

export default {
  schema: './src/user/entities/**/*.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'vamshi05',
    database: 'drizzle-crud',
    ssl: false,
  },
} satisfies Config;