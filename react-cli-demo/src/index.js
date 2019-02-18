import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import mypanel from './panel';
import { LocaleProvider } from 'antd';
import * as serviceWorker from './serviceWorker';
import { addLocaleData, IntlProvider } from 'react-intl';
import enUS from './locales/en.json';
import zhCN from './locales/zh.json';
import zh from 'antd/lib/locale-provider/zh_CN';
import en from 'antd/lib/locale-provider/en_US';
// addLocaleData([...enUS, ...zhCN]);

// const langMap = {
//     'zh': zhCN,
//     'en': enUS
// };
ReactDOM.render(
    <LocaleProvider locale={"en_US"} message={en}>
        <IntlProvider locale={"en_US"} message={enUS}>
            <App />
        </IntlProvider>
    </LocaleProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
