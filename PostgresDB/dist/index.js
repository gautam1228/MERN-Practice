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
const pgClient = new pg_1.Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "mysecretpassword",
});
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield pgClient.connect();
    console.log(`.... DB connected ....`);
});
const sendQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    const createQuery = `CREATE TABLE todos (
        id SERIAL PRIMARY KEY,
        title VARCHAR(50),
        description VARCHAR(100),
        done BOOLEAN 
    );`;
    const insertQuery = `INSERT INTO todos (title, description) VALUES ($1, $2);`;
    const insertResponse = yield pgClient.query(insertQuery, ["Go to gym", "7-9 AM"]);
    console.log(insertResponse);
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield connectDB();
        yield sendQuery();
    });
}
main();
