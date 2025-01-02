import { Client } from "pg";

// const pgClient = new Client("postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable");

const pgClient = new Client({
    host : "localhost",
    port : 5432,
    database : "postgres",
    user : "postgres",
    password : "mysecretpassword",
});

const connectDB = async () => {
    await pgClient.connect();
    console.log(`.... DB connected ....`);
}

const sendQuery = async () => {

    const createQuery = `CREATE TABLE todos (
        id SERIAL PRIMARY KEY,
        title VARCHAR(50),
        description VARCHAR(100),
        done BOOLEAN 
    );`
    // const response = await pgClient.query(createQuery);

    const insertQuery = `INSERT INTO todos (title, description) VALUES ($1, $2);`; // To avoid SQL injection

    const insertResponse = await pgClient.query(insertQuery, ["Go to gym","7-9 AM"]);
    console.log(insertResponse);
}

async function main(){
    await connectDB();
    await sendQuery();
}

main();
