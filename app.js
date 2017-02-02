import { ngettext, msgid, t } from 'c-3po';

export const view = (hours, minutes, seconds) => {
    const hoursTxt = ngettext(msgid`${hours} hour`, `${hours} hours`, hours);
    const minutesTxt = ngettext(msgid`${minutes} minute`, `${minutes} minutes`, minutes);
    const secondsTxt = ngettext(msgid`${seconds} second`, `${seconds} seconds`, seconds);

    return `
    <ul>
        <li>${ t`Choose locale` }</li>
        <li><a href="/">en</a></li>
        <li><a href="/uk">uk</a></li>
    </ul>
    <h1>${ t`webpack with c-3po localization demo` }</h1>
    <h2>${ t`Current time is` }</h2>
    <h3>${hoursTxt} ${minutesTxt} ${secondsTxt}</h3>
    `
};


if (typeof document !== 'undefined') {
    const content = document.getElementById('content');
    setInterval(() => {
        const date = new Date();
        content.innerHTML = view(date.getHours(), date.getMinutes(), date.getSeconds());
    }, 1000);
}

export default () => {
    const date = new Date();
    const viewStr = view(date.getHours(), date.getMinutes(), date.getSeconds());

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
        <div id="content">${viewStr}</div>
        <script src='./app.js' type='text/javascript'></script>
        </body>
    </html>`
};