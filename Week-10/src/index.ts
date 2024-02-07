import { Client } from "pg";

const client = new Client({
    connectionString : "postgresql://gautamsingh12122003:Mglikxou46XS@ep-patient-breeze-58497786.ap-southeast-1.aws.neon.tech/Test?sslmode=require"
});


async function createUsersTable(){
    
    await client.connect();
    
    const result = await client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            email VARCHAR(250) UNIQUE NOT NULL,
            username VARCHAR(250) UNIQUE NOT NULL,
            password VARCHAR(250) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);

    console.log(result);
}

async function addUser(username:string, email: string, password: string){

    
    try{
        await client.connect();
        
        // Using parametrized query to prevent SQL injection.
        const insertQuery = `
            INSERT INTO users
            (username, email, password)
            VALUES ($1, $2, $3)`;
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log('Insertion success : ', res);
    }
    catch(e){
        console.log("Error when inserting ", e);
    }
    finally{
        await client.end(); // Close the client connection
    }

}

addUser('gautam12344', 'gautam123444@gmail.com', 'gautam12123344').catch(console.error);