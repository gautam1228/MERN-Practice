import { Client } from "pg";

const client = new Client({
    connectionString : "postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function createUsersTable(){

    await client.connect();

    const result = await client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);

    await client.end();

    console.log(result);

}

// createUsersTable();                  // used only when the table was first being created (i.e. the first time you run this file)

async function insertUserData(username: string, password: string, email: string){

    try{

        await client.connect();


        // Secure way

        const result = await client.query(`
            INSERT INTO users2 (username, password, email)
            VALUES ($1, $2, $3);
        `, [username, password, email]);


        // Insecure way (Prone to SQL-Injection)

        // const result  = await client.query(`
        //     INSERT INTO users2 (username, email, password)
        //     VALUES ('${username}', '${email}', '${password}')
        // `);

        console.log("Insertion successful ! ", result);

    }
    catch(e){
        console.log("Error when inserting : ", e);
    }
    finally{
        await client.end();
    }

}

insertUserData("gautam@123", "gautam1234", "gautam123@gmail.com").catch(console.error);