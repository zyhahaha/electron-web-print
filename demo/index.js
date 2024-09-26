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

    const htmlData = `<div style="width: 100%; font-size: 12px; word-break: break-all;">
        <h2>title</h2>
        <h5>subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle</h5>
        <p>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</p>
        <p>总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你</p>
        <p>总问你总问你</p>
    </div>`;

    try {
        webPrint(htmlData, options)
    } catch (e) {
        console.log(webPrint)
        console.log(e);
    }
}