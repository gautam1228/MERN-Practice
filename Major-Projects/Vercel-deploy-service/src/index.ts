import { commandOptions, createClient } from "redis";
import { copyFinalDist, downloadS3Folder } from "./aws";
import { BuildProject } from "./utils";

const subscriber = createClient();

subscriber.connect();

async function main(){
    while(true){
        const response = await subscriber.brPop(
            commandOptions({isolated : true}),
            'build-queue',
            0
        )
        // Processing logic here.
        // @ts-ignore
        const id = response.element;

        await downloadS3Folder(`output/${id}`);
        await BuildProject(id);
        copyFinalDist(id);
    }
}

main();