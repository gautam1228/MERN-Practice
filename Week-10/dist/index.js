"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://gautamsingh12122003:Mglikxou46XS@ep-patient-breeze-58497786.ap-southeast-1.aws.neon.tech/Test?sslmode=require"
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            email VARCHAR(250) UNIQUE NOT NULL,
            username VARCHAR(250) UNIQUE NOT NULL,
            password VARCHAR(250) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(result);
    });
}
function addUser(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const insertQuery = `
            INSERT INTO users
            (username, email, password)
            VALUES ($1, $2, $3)`;
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log('Insertion success : ', res);
        }
        catch (e) {
            console.log("Error when inserting ", e);
        }
        finally {
            yield client.end();
        }
    });
}
addUser('gautam12344', 'gautam123444@gmail.com', 'gautam12123344').catch(console.error);
