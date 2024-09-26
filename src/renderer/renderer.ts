import './index.css';
const ipcRender = require('electron').ipcRenderer;

ipcRender.on('render-html', (event, printHtml: string) => {
    document.body.innerHTML = printHtml;
    setTimeout(() => {
        event.sender.send('render-html-reply', 'ok')
    }, 0)
});
