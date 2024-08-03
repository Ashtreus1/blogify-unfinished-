require('dotenv').config();
const mysql = require('mysql2/promise');

// Function to create a database connection
const connectToDatabase = async (database) => {
  try {
    console.log(`Connecting to ${database} database...`);
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database,
    });
    console.log(`Connected to ${database} database successfully.`);
    return connection;
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
};

const seedDatabase = async () => {
  try {
    // Create connections for each database
    const authDbConnection = await connectToDatabase(process.env.MYSQL_DATABASE_AUTH);
    const interactionDataDbConnection = await connectToDatabase(process.env.MYSQL_DATABASE_INTERACTION);

    // Define queries for deleting existing data
    const deletePostsQuery = 'DELETE FROM posts WHERE user_id IN (SELECT id FROM auth_db.users)';
    const deleteUsersQuery = 'DELETE FROM users';
    
    // Define queries for inserting new data
    const insertUserQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    const insertPostQuery = 'INSERT INTO posts (title, user_id, content, likes, comments) VALUES (?, ?, ?, ?, ?)';

    // Start seeding process

    console.log('Deleting posts...');
    await interactionDataDbConnection.query(deletePostsQuery);

    console.log('Deleting users...');
    await authDbConnection.query(deleteUsersQuery);

    // Insert new data into auth_db.users
    console.log('Inserting users...');
    const users = [
      ['user1', 'user1@example.com', 'password123'],
      ['user2', 'user2@example.com', 'password123'],
      ['user3', 'user3@example.com', 'password123'],
      ['user4', 'user4@example.com', 'password123'],
      ['user5', 'user5@example.com', 'password123'],
      ['user6', 'user6@example.com', 'password123'],
      ['user7', 'user7@example.com', 'password123'],
      ['user8', 'user8@example.com', 'password123'],
      ['user9', 'user9@example.com', 'password123'],
      ['user10', 'user10@example.com', 'password123'],
    ];
    for (const user of users) {
      await authDbConnection.query(insertUserQuery, user);
    }

    // Fetch user ids for inserting posts
    const [userRows] = await authDbConnection.query('SELECT id FROM users');
    const userIds = userRows.map(row => row.id);

    // Insert new data into interaction_data_db.posts
    console.log('Inserting posts...');
    const posts = [
      ['Post Title 1', userIds[0], 'Content of post 1', 5, 3],
      ['Post Title 2', userIds[1], 'Content of post 2', 2, 1],
      ['Post Title 3', userIds[2], 'Content of post 3', 4, 2],
      ['Post Title 4', userIds[3], 'Content of post 4', 3, 1],
      ['Post Title 5', userIds[4], 'Content of post 5', 6, 5],
      ['Post Title 6', userIds[5], 'Content of post 6', 7, 4],
      ['Post Title 7', userIds[6], 'Content of post 7', 1, 0],
      ['Post Title 8', userIds[7], 'Content of post 8', 8, 6],
      ['Post Title 9', userIds[8], 'Content of post 9', 0, 0],
      ['Post Title 10', userIds[9], 'Content of post 10', 9, 7],
    ];
    for (const post of posts) {
      await interactionDataDbConnection.query(insertPostQuery, post);
    }

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error during seeding:', error);
  }
};

// Run the seeding script
seedDatabase();
