const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = ({ extract, locale }={}) => {
    const c3po = {};

    function localePath(path) {
        return locale ? `${locale}/${path}` : path ;
    }

    if (extract) {
        c3po.extract = { output: 'template.pot'}
    }

    if (locale) {
        c3po.resolve = { translations: `${locale}.po` };
    }

    return {
        entry: { app: './app.js' },
        output: { path: 'dist',  filename: localePath('app.js'), libraryTarget: 'umd' },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: { loader: 'babel-loader', options: { plugins: [['c-3po', c3po]] } }
                }
            ]
        },
        plugins: [
            new StaticSiteGeneratorPlugin('app', localePath('index.html'))
        ]

    }
};
