CREATE TABLE "Users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"age" integer
);
--> statement-breakpoint
DROP TABLE "Drizz" CASCADE;