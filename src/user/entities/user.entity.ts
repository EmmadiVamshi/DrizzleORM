import { integer, pgTable, serial,varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('Users', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull(),
  age : integer('age'),
});
