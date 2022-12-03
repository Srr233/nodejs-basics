import { promises } from "fs";
const create = async () => {
    let hasAccess = false;
    try {
        await promises.access('./src/fs/files/fresh.txt');
        hasAccess = true;
    } catch (err) {}
    if (hasAccess) {
        throw new Error('FS operation failed');
    } else {
        await promises.writeFile('./src/fs/files/fresh.txt', 'I am fresh and young');
    }
};

create();