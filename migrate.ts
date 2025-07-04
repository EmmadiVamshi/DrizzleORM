import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db } from './src/user/db'

async function main() {
  await migrate(db, { migrationsFolder: './drizzle' });
  console.log('Migration completed');
}

main().catch((err) => {
  console.error('Migration failed:', err);
});
