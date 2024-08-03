import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { authDbConnection } from '../../../lib/db';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json(); // Parse JSON

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Missing fields' },
        { status: 400 }
      );
    }

    const connection = await authDbConnection;
    const [rows] = await connection.query(
      'SELECT id, username, password FROM users WHERE username = ?',
      [username]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 400 }
      );
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        id: user.id,
        username: user.username,
        logged_at: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json(
      { error: 'Error processing request' },
      { status: 500 }
    );
  }
}
