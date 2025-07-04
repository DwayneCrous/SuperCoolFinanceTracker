import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/routes/Transactions/transactions.json');

export async function POST({ request }) {
  const { account, tx } = await request.json();

  let data = {};
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (e) {
    data = {};
  }

  if (!data[account]) data[account] = [];
  data[account].push(tx);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}