import { NextRequest, NextResponse } from 'next/server';
import { interactionDataDbConnection, authDbConnection } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const interactionConnection = await interactionDataDbConnection;
    const authConnection = await authDbConnection;

    // Query to fetch posts and associated user data
    const [rows] = await interactionConnection.query(`
      SELECT 
        p.post_id, 
        p.title,
        p.content, 
        u.username AS author,
        p.likes, 
        p.comments 
      FROM posts p 
      JOIN ${authConnection.config.database}.users u ON p.user_id = u.id
      ORDER BY p.likes DESC 
      LIMIT 5;
    `);

    console.log('Fetched posts:', rows);  // Log the fetched posts for debugging

    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return NextResponse.json(
      { error: 'Error processing request' },
      { status: 500 }
    );
  }
}
