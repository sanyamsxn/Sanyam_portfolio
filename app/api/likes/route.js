import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'likes.json');

export async function GET() {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(fileContent);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(){
  const fileContent= fs.readFileSync(filePath, 'utf-8');
  const data= JSON.parse(fileContent);

  data.likes-=1;
  fs.writeFileSync(filePath, JSON.stringify(data));

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST() {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(fileContent);

  data.likes += 1;
  fs.writeFileSync(filePath, JSON.stringify(data));

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
