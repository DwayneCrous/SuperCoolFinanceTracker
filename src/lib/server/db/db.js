import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { resolve } from "path";

export const initDB = async () => {
	const db = await open({
		filename: resolve("db.sqlite"),
		driver: sqlite3.Database,
	});
	return db;
};
