const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require("path");
const { webPrint } = require("../dist/index");

const createWindow = () => {
    const size = screen.getPrimaryDisplay().size;
    console.log(size);
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile('index.html');
    // open deve tools
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();
});

ipcMain.on('test-print', testPrint);


function testPrint() {
    const options = {
        silent: true, // 静默打印
        preview: false,
        printBackground: true,
        width: 200,
        height: 700,
        copies: 1,
        printerName: 'XP-80C', // XP-80C、HPRT N41
        timeOutPerLine: 400,
    }

    const htmlData = `<div style="font-size: 5px;">
        <h2>Hello World 111</h2>
    </div>`;

    try {
        webPrint(htmlData, options)
    } catch (e) {
        console.log(webPrint)
        console.log(e);
    }
}