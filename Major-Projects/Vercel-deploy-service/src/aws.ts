import { S3 } from "aws-sdk";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config();

const s3 = new S3({
    accessKeyId : process.env.R2_API_ACCESS_KEY,
    secretAccessKey : process.env.R2_API_SECRET,
    endpoint : process.env.R2_BUCKET_ENDPOINT
});

export const downloadS3Folder = async (prefix: string) => {
    
    const allFiles = await s3.listObjectsV2({
        Bucket : "vercel",
        Prefix : prefix
    }).promise();

    const allPromises = allFiles.Contents?.forEach(async ({Key}) => {

        return new Promise(async (resolve) => {
            if(!Key){
                resolve();
                return;
            }
            const finalOutputPath = path.join(__dirname, Key); //dist/output/randomid
            const dirName = path.dirname(finalOutputPath);
            if(!fs.existsSync(dirName)){
                fs.mkdirSync(dirName, {recursive : true});
            }
            const outputFile = fs.createWriteStream(finalOutputPath);
    
            s3.getObject({
                Bucket : 'vercel',
                Key
            }).createReadStream().pipe(outputFile).on("finish", () => {
                resolve();
            });

        })
        
    }) || [];

    await Promise.all(allPromises?.filter(x => x !== undefined));

}

export function copyFinalDist(id : string){
    
    const folderPath = path.join(__dirname, `output/${id}/dist`);

    const allFiles = getAllFiles(folderPath);

    allFiles.forEach(file => {
        uploadFile(`dist/${id}`+file.slice(folderPath.length + 1), file);
    })
}

const uploadFile = async (fileName: string, localFilePath: string) => {

    const fileContent = fs.readFileSync(localFilePath);

    const response = await s3.upload({
        Body : fileContent,
        Bucket : "vercel",
        Key : fileName,
    }).promise();

    console.log(response);
    
}

const getAllFiles = (folderPath: string) => {

    let response: string[] = [];

    const allFilesAndFolders = fs.readdirSync(folderPath);

    allFilesAndFolders.forEach(file => {

        const fullFilePath = path.join(folderPath, file);

        if(fs.statSync(fullFilePath).isDirectory()){

            response = response.concat(getAllFiles(fullFilePath)); // Doing a concat instead of a push because getAllfiles() returns an array of strings, but we want response to be an array of strings.

        }
        else{
            response.push(fullFilePath);
        }
        
    });

    return response;

}