import { Client } from "pg";

const client = new Client({
    connectionString : "postgresql://gautamsingh12122003:Mglikxou46XS@ep-patient-breeze-58497786.ap-southeast-1.aws.neon.tech/Test?sslmode=require"
});

client.connect();

