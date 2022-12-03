import crypto from 'crypto';
import { promises } from 'fs';
import path from 'path';

console.log(path.resolve())
const calculateHash = async () => {
    const content = await promises.readFile(process.cwd() + '/src/hash/files/fileToCalculateHashFor.txt');
    const cryptoContent = crypto.createHash('sha256').update(content).digest('hex');
    console.log(cryptoContent);
};

calculateHash();