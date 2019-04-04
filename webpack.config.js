var config = {
    mode: 'production',
    entry: {
        "cc.js.min": "./src/index.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        library: 'cc.js'
    }
};

module.exports = config;
