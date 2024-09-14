const ipcRender = require('electron').ipcRenderer;

ipcRender.on('render-html', (printHtml) => {
    document.body.innerHTML = printHtml;
});
