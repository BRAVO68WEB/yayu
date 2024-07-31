import { upload } from "./upload";
import config from "./config.json";
import fs from "fs";
import { rimraf } from "rimraf";

type PublishType = "PUBLIC" | "UNLISTED" | "PRIVATE";

interface Video {
    path: string;
    title: string;
    description: string;
    publishType: PublishType
}

const uploadArray : Video[] = [];

const PathToCheck = config.upload_path;
const files = fs.readdirSync(PathToCheck);

files.forEach((file) => {
    const video: Video = {
        path: PathToCheck + "\\" + file,
        title: file,
        description: "Uploaded by YAYU",
        publishType: config.upload_preserse as PublishType
    }
    uploadArray.push(video);
});

await upload(config.creds, [...uploadArray], {headless: config.show_browser}).then(console.log)

if(config.delete_after_upload) {
    for(const file of uploadArray) {
        rimraf(file.path);
    }
}