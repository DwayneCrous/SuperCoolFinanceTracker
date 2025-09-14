import { readFileSync } from "fs";
import { resolve } from "path";
import { initDB } from "../src/lib/server/db/db.js";

const init = async () => {
	const sql = readFileSync(resolve("src/lib/server/db/init.sql"), "utf8");
	const db = await initDB();
	db.exec(sql);
	console.log("✅ SQLite database initialized!");
};

init();
