const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const path = require('path');

module.exports = ({ extract, host }={}) => {
    const c3po = {};

    if (extract) {
        c3po.extract = { output: 'template.pot'}
    }

    return {
        entry: { app: './app.js' },
        output: { path: path.join(__dirname, 'dist'),  filename: 'app.js' },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: { loader: 'babel-loader', options: { presets: ['es2015'] } }
                },
                {test: /\.po$/, loader: 'json-loader!po-gettext-loader'}
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                HOST: JSON.stringify(host || '')
            }),
        ]

    }
};
