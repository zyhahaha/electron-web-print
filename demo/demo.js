const { ipcRenderer } = require('electron');
document.getElementById('btn').addEventListener('click', sendTestPrint);

function sendTestPrint() {
    ipcRenderer.send('test-print', {});
}