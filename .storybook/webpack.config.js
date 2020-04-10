const path = require("path");
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const SRC_PATH = path.join(__dirname, "../src");
const STORIES_PATH = path.join(__dirname, "../stories");
module.exports = ({config}) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [SRC_PATH, STORIES_PATH],
        use: [
        {
            loader: require.resolve("awesome-typescript-loader"),
            options: {
            configFileName: './tsconfig.json'
            }
        }
        ]
    });

    config.resolve.plugins = [
        new TsConfigPathsPlugin(/* { configFileName, compiler } */)
    ];

    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};