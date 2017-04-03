import { ngettext, msgid, t, addLocale, useLocale } from 'c-3po';
export const view = (hours, minutes, seconds) => {
    const hoursTxt = ngettext(msgid`${hours} hour`, `${hours} hours`, hours);
    const minutesTxt = ngettext(msgid`${minutes} minute`, `${minutes} minutes`, minutes);
    const secondsTxt = ngettext(msgid`${seconds} second`, `${seconds} seconds`, seconds);

    return `
    <ul>
        <li>${ t`Choose locale` }</li>
        <li><a href="${HOST}/">en</a></li>
        <li><a href="${HOST}/uk">uk</a></li>
    </ul>
    <h1>${ t`webpack with c-3po localization demo` }</h1>
    <h2>${ t`Current time is` }</h2>
    <h3>${hoursTxt} ${minutesTxt} ${secondsTxt}</h3>
    `
};

function runApp() {
    const content = document.getElementById('content');
    setInterval(() => {
        const date = new Date();
        content.innerHTML = view(date.getHours(), date.getMinutes(), date.getSeconds());
    }, 1000);
}

if (process.env.NODE_ENV !== 'production') {
    const LOCALE = window.LOCALE;
    if (LOCALE !== 'en') {
        require.ensure([], (require) => {
            const localeData = require(`./${LOCALE}.po`);
            addLocale(LOCALE, localeData);
            useLocale(LOCALE);
            runApp();
        });
    } else {
        runApp();
    }
} else {
    runApp();
}
