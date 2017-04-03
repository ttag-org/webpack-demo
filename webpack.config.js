const webpack = require('webpack');
const path = require('path');

module.exports = ({ extract, host, locale }={}) => {
    const babelOptions = { presets: ['es2015'] };
    const c3po = {};

    if (extract) {
        c3po.extract = { output: 'template.pot'};
        babelOptions.plugins = [['c-3po', c3po]];
    }

    if (locale) {
        c3po.resolve = {translations: `${locale}.po`};
        babelOptions.plugins = [['c-3po', c3po]];
    }

    const alias = {};
    if (process.env.NODE_ENV === 'production') {
        alias['c-3po'] = path.resolve(__dirname, 'node_modules/c-3po/dist/mock.js');
    }

    return {
        entry: { app: './app.js' },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: locale ? `${locale}/app.js` : 'app.js',
            publicPath: 'static/',
        },
        resolve: { alias },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: { loader: 'babel-loader', options: babelOptions }
                },
                {test: /\.po$/, loader: 'json-loader!po-gettext-loader'}
            ]
        },
        plugins: [
            new webpack.DefinePlugin(
                {
                    HOST: JSON.stringify(host || ''),
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'debug')
                }),
        ]

    }
};
