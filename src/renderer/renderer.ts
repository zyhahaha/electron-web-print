const ipcRender = require('electron').ipcRenderer;

ipcRender.on('render-html', (e, printHtml: string) => {
    console.log(e)
    document.body.innerHTML = printHtml;
});
