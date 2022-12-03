import zlib from 'zlib';
import fs from 'fs';

const compress = async () => {
    const gZip = zlib.createGzip();
    const [readStream, writeStream] = [fs.createReadStream('./src/zip/files/fileToCompress.txt'), fs.createWriteStream('./src/zip/files/archive.gz')];
    readStream.pipe(gZip).pipe(writeStream);
};
compress();