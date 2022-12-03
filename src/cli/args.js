const parseArgs = () => {
    console.log(process.argv)
    const sliced = process.argv.slice(2);
    
    const resArr = [];
    for (let i = 0; i < sliced.length; i++) {
        if (i & 1) {
            const lastIndex = resArr.length - 1;
            resArr[lastIndex] = `${resArr[lastIndex]} is ${sliced[i]}`;
        } else {
            resArr.push(sliced[i]);
        }
    }

    console.log(resArr.join(', '));
};

parseArgs();