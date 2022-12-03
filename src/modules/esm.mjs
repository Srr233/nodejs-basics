import path from 'path';
import { release, version } from 'os';
import fs from 'fs';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
const random = Math.random();
const unknownObject = random > 0.5 ? (fs.readFileSync('./src/modules/files/a.json')).toString() : (fs.readFileSync('./src/modules/files/b.json')).toString();

console.log(`Release ${release()}
Version ${version()}
Path segment separator is "${path.sep}"
Path to current file is ${import.meta.url}
Path to current directory is ${path.dirname(import.meta.url)}`);

const PORT = 3000;

const server = createServerHttp((_, res) => {
    res.end('Request accepted');
});
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}
    To terminate it, use Ctrl+C combination`);
})
console.log(unknownObject);
export {
    unknownObject,
    server,
}