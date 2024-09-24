const ipcRender = require('electron').ipcRenderer;

ipcRender.on('render-html', (event, printHtml: string) => {
    document.body.innerHTML = printHtml;
    console.log('render-html ok', event.sender)
    event.sender.send('render-html-reply', 'ok')
});
