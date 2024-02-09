import { S3 } from "aws-sdk";
import fs from "fs";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

const s3 = new S3({
    accessKeyId : process.env.R2_API_ACCESS_KEY,
    secretAccessKey : process.env.R2_API_SECRET,
    endpoint : process.env.R2_BUCKET_ENDPOINT
});

// fileName : => output/12312/src/App.jsx
// filepath => /Users/gautam/Desktop/Coding/Mern-Practice/Major-Projects/VERCEL/dist/output/12312/src/App.jsx

export const uploadFile = async (fileName: string, localFilePath: string) => {

    const fileContent = fs.readFileSync(localFilePath);

    const response = await s3.upload({
        Body : fileContent,
        Bucket : "vercel",
        Key : fileName,
    }).promise();

    console.log(response);
}