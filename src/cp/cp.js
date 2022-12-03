import { spawn } from 'child_process';
const spawnChildProcess = async (args) => {
    const child = spawn(`node ${process.cwd() + '/src/cp/files/script.js'}`, args, {shell: true});
    child.stdout.pipe(process.stdout);
    process.stdin.pipe(child.stdin);
};

spawnChildProcess([1, 2]);