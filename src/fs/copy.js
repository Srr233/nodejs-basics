import { promises } from "fs";
const copy = async () => {
    let hasAccessToFilesFolder = false;
    let hasAccessToFilesCopy = false;
    try {
        await promises.access('./src/fs/files_copy');
        hasAccessToFilesCopy = true;
    } catch (err) {}

    try {
        await promises.access('./src/fs/files');
        hasAccessToFilesFolder = true;
    } catch(err) {}


    if (hasAccessToFilesCopy == true || hasAccessToFilesFolder == false) {
        throw new Error('FS operation failed');
    } else {
        await copyFolder('./src/fs/files', './src/fs/files_copy');
    }
};

async function copyFolder (from, to) {
    try {
        await promises.access(to);
    } catch (e) {
        await promises.mkdir(to);
    }
    const filesNameFrom = await promises.readdir(from);

    for (const fileName of filesNameFrom) {
        if (fileName.match('.')) {
            const content = await promises.readFile(from + '/' + fileName);
            await promises.writeFile(to + '/' + fileName, content);
        } else {
            await copyFolder(from + '/' + fileName, to + '/' + fileName);
        }
    }
}
copy();