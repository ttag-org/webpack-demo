const express = require('express');
const app = express();
const isProd = process.env.NODE_ENV == 'production';

function view(locale = 'en') {
    let staticUrl = 'static/app.js';

    if (isProd && locale !== 'en') {
        staticUrl = `/static/${locale}/app.js`;
    }

    return `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>c-3po with webpack demo</title>
        </head>
        <style>
            li { display: inline; margin: 0, padding: 0 }
            ul { margin: 0; padding: 0 }
        </style>
        
        <body>
        <div id="content"></div>
        <script type='text/javascript'>window.LOCALE = '${locale}';</script>
        <script src='${staticUrl}' type='text/javascript'></script>
        </body>
    </html>`
}

app.get('/:lang?', function (req, res) {
    res.send(view(req.params.lang));
});

app.use('/static', express.static('dist'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
