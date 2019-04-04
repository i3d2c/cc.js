var config = {
    mode: 'development',
    entry: {
        "cc.js": "./src/index.js"
    },
    output: {
        path: "./dist",
        filename: "main.js"
    },
    devtool: "source-map",
    watch: true // Re-build on each file change
};

module.exports = config;
