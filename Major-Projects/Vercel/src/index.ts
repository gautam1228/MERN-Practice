import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generateId } from "./utils";
import path from "path";
import { getAllFiles } from "./files";
import dotenv from "dotenv";
import { uploadFile } from "./aws";
import { createClient } from "redis";

// Loading the environment variables from .env
dotenv.config();

const publisher = createClient();
publisher.connect();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/deploy", async (req, res) => {
   
    const repoUrl = req.body.repoUrl;
    const id = generateId();

    await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));

    const files = getAllFiles(path.join(__dirname, `output/${id}`)); // Array of all the files and folders inside the ' output/id ' folder.

    files.forEach(async file => {
        await uploadFile(file.slice(__dirname.length + 1), file);
    });

    publisher.lPush("build-queue", id);

    // put this to s3
    res.json({
        id : id
    });

});

app.listen(process.env.PORT);