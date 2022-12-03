import { promises } from 'fs';
const rename = async () => {
    let fileExist = false;
    try {
        await promises.open('./src/fs/files/properFilename.md');
    } catch(e) {}

    try {
        await promises.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md')
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

rename();