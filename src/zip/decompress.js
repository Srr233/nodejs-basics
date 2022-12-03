import zlib from 'zlib';
import fs from 'fs';

const decompress = async () => {
    const unZip = zlib.createUnzip();
    const [readStream, writeStream] = [fs.createReadStream('./src/zip/files/archive.gz'), fs.createWriteStream('./src/zip/files/fileToCompress.txt')];
    readStream.pipe(unZip).pipe(writeStream);
};

decompress();