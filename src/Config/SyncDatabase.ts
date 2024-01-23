import mysql from 'mysql2/promise';

export const SyncDatabase = async () => {
    const databaseName = 'auth';
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
    });

    try {
        const [existingDatabases]:any = await connection.query(`SHOW DATABASES LIKE '${databaseName}'`);
        if (existingDatabases.length > 0) {
            throw new Error(`Database ${databaseName} already exists.`);
        }
    } catch (error :any) {
        if (error.code === 'ER_NO_DB_ERROR') {
            console.error('Database not found. Creating database...');
            connection.end();

            try {
                // Membuat database baru
                const createConnection = await mysql.createConnection({
                    host: 'localhost',
                    user: 'root',
                    password: '',
                });

                await createConnection.query(`CREATE DATABASE ${databaseName};`);
                console.log('Database created successfully.');

                // Menutup koneksi baru
                createConnection.end();
            } catch (createError) {
                console.error('Error creating database:', createError);
            }
        } else {
            console.error('Error:', error);
        }
    } finally {
        connection.end();
    }
};