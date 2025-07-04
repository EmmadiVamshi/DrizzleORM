import { sql } from 'drizzle-orm';

export const up = () => {
  return sql`ALTER TABLE driztable RENAME TO Drizz;`;
};

export const down = () => {
  return sql`ALTER TABLE Drizz RENAME TO driztable;`;
};