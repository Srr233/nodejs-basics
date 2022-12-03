import { promises } from "fs";
const remove = async () => {
    try {
        await promises.unlink('./src/fs/files/fileToRemove.txt');
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

remove();