import { promises } from 'fs';
const read = async () => {
    try {
        console.log((await promises.readFile('./src/fs/files/fileToRead.txt')).toString());
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

read();