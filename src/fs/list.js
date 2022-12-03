import { promises } from "fs";
const list = async () => {
   try {
    console.log(await (await promises.readdir('./src/fs/files')).join(', '));
   } catch (e) {
    throw new Error('FS operation failed');
   }
};

list();