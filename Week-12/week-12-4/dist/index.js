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
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        yield client.end();
        console.log(result);
    });
}
function insertUserData(username, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const result = yield client.query(`
            INSERT INTO users2 (username, password, email)
            VALUES ($1, $2, $3);
        `, [username, password, email]);
            console.log("Insertion successful ! ", result);
        }
        catch (e) {
            console.log("Error when inserting : ", e);
        }
        finally {
            yield client.end();
        }
    });
}
insertUserData("gautam@123", "gautam1234", "gautam123@gmail.com").catch(console.error);
