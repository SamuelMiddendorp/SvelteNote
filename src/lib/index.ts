import Database from "better-sqlite3";

const db = new  Database('./data/chinook.db', { verbose: console.log})


export function getAlbums(limit = 50): any{
	const sql = `
    select * from albums
  `;
	const stmnt = db.prepare(sql);
	const rows = stmnt.all({ limit });
    return rows;
}
