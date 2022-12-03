import { Transform } from 'stream';
import fs from 'fs';

class MyTransform extends Transform {
    _transform(chunk, encoding, callback) {
        const text = chunk.toString().split('').reverse().join('');
        this.push(text);
        callback()
    }
}
const transform = async () => {
    const myTransform = new MyTransform();
    const writableStream = fs.createWriteStream('./src/streams/files/fileToWrite.txt');
    
    process.stdin.pipe(myTransform).pipe(writableStream);
};

transform();