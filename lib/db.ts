import { createConnection, Connection } from 'mysql2/promise';

const connectToDatabase = async (database: string): Promise<Connection> => {
  try {
    const connection = await createConnection({
      host: process.env.MYSQL_HOST!,
      user: process.env.MYSQL_USER!,
      password: process.env.MYSQL_PASSWORD!,
      database,
    });
    console.log(`Connected to ${database} database successfully`);
    return connection;
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
};

// Create connections for each database
const authDbConnection = connectToDatabase(process.env.MYSQL_DATABASE_AUTH!);
const personalDataDbConnection = connectToDatabase(process.env.MYSQL_DATABASE_PERSONAL!);
const interactionDataDbConnection = connectToDatabase(process.env.MYSQL_DATABASE_INTERACTION!);

export { authDbConnection, personalDataDbConnection, interactionDataDbConnection };
