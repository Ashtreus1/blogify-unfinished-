  import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { authDbConnection } from '../../../lib/db';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    console.log('Form Data:', { username, email, password });

    if (!username || !email || !password) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const connection = await authDbConnection;
    const [result] = await connection.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    console.log('User inserted:', { username, email });

    return NextResponse.json({
      id: (result as any).insertId,
      username,
      email,
      created_at: new Date().toISOString(),
    }, { status: 201 });
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}
