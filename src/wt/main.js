import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const amountOfCPUs = os.cpus().length;
    let start = 10;
    const resultsOfArr = [];
    for (let i = 0; i < amountOfCPUs; i++) {
        const worker = new Worker('./src/wt/worker.js');
        worker.postMessage(start++);
        worker.on('message', v => {
            if (resultsOfArr.push(v) == amountOfCPUs) {
                console.log(resultsOfArr);
            }
        });
    }
};

performCalculations();