import fs from "fs";
import path from "path";

export const getAllFiles = (folderPath: string) => {

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

console.log(__dirname);