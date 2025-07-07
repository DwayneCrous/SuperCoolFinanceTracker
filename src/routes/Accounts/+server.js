import fs from 'fs/promises';
const filePath = 'accounts.json';

export async function GET() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return new Response(data, { status: 200 });
  } catch {
    return new Response('[]', { status: 200 });
  }
}

export async function POST({ request }) {
  const accounts = await request.json();
  await fs.writeFile(filePath, JSON.stringify(accounts, null, 2));
  return new Response('Saved', { status: 200 });
}