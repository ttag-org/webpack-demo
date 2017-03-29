const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const fs = require('fs');

module.exports = ({ extract, locale, host }={}) => {
    const c3po = {};

    function localePath(path) {
        return locale ? `${locale}/${path}` : path ;
    }

    if (extract) {
        c3po.extract = { output: 'template.pot'}
    }

    return {
        entry: { app: './app.js' },
        output: { path: 'dist2',  filename: localePath('app.js'), libraryTarget: 'umd' },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: { loader: 'babel-loader', options: { plugins: extract ? [['c-3po', c3po]] : [] } }
                },
                {test: /\.po$/, loader: 'json!po'}
            ]
        },
        plugins: [
            new StaticSiteGeneratorPlugin('app', localePath('index.html')),
            new webpack.DefinePlugin({
                HOST: JSON.stringify(host || ''),
                LOCALE: JSON.stringify(locale) || JSON.stringify(false),
            }),
        ]

    }
};

