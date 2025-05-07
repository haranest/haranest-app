import { pgTable, uuid, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const profiles = pgTable('profiles', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().unique(), // foreign key to users table
  fullName: varchar('full_name', { length: 255 }).notNull(),
  bio: text('bio'),
  location: varchar('location', { length: 255 }),
  profilePicture: text('profile_picture'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
