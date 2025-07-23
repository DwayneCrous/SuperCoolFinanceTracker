import { initDB } from '../../lib/server/db/db.js';

export async function GET({ locals }) {
  try {
    const db = initDB();
    // Use fallback user_id=1 for development if not authenticated
    const user_id = locals?.user?.id || 1;
    // Get only accounts for this user
    const rows = db.prepare('SELECT * FROM Accounts WHERE user_id = ?').all(user_id);
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (err) {
    console.error('GET /Accounts error:', err);
    return new Response('[]', { status: 500 });
  }
}

export async function POST({ request, locals }) {
  try {
    const account = await request.json();
    const db = initDB();
    // Use fallback user_id=1 for development if not authenticated
    const user_id = locals?.user?.id || 1;
    // Map frontend type to DB account_name
    let account_name = account.type.toLowerCase();
    if (account_name === 'checking') account_name = 'cheque';
    // Insert new account with date
    const stmt = db.prepare(`INSERT INTO Accounts (user_id, account_name, balance, account_type, date) VALUES (?, ?, ?, ?, ?)`);
    stmt.run(
      user_id,
      account_name,
      parseFloat(account.balance) || 0,
      account.type,
      account.creationDate || new Date().toISOString().slice(0, 10)
    );
    return new Response('Saved', { status: 200 });
  } catch (err) {
    console.error('POST /Accounts error:', err);
    return new Response('Error', { status: 500 });
  }
}