import { parentPort } from 'worker_threads';
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (val) => {
    // This function sends result of nthFibonacci computations to main thread 
    if (val instanceof Error ) {
        parentPort.postMessage({
            status: 'error',
            data: null
        });
    } else {
        parentPort.postMessage({
            status: 'resolved',
            data: val
        });
    }
};

parentPort.on('message', (message) => {
    let result
    try {
        result = nthFibonacci(message);
    } catch (err) {
        result = new Error('Something went wrong!');
    }
    sendResult(result)
});