const parseEnv = () => {
    const rssEnv = Object.entries(process.env)
    .filter((arr) => arr[0].match(/RSS_/));
    const stringRssEnv = rssEnv.map(v => `${v[0]}=${v[1]};`);
    console.log (stringRssEnv.join(' '));
};

parseEnv();