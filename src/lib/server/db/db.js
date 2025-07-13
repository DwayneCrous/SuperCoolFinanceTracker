import Database from 'better-sqlite3';
import { resolve } from 'path';

export const initDB = () => {
  const db = new Database(resolve('src/lib/server/db/data.sqlite'));
  return db;
};
