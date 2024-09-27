const { app, BrowserWindow, ipcMain, screen } = require('electron');
const { webPrint } = require("../dist/index");

const createWindow = () => {
    // const size = screen.getPrimaryDisplay().size;
    // console.log(size);
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
        preview: false,
        silent: true,
        width: 76, // 纸张宽度，单位：mm
        height: 130, // 纸张高度，单位：mm
        printBackground: true,
        printerName: 'HPRT N41', // XP-58 (副本 1)、HPRT N41
    }

    const htmlData = `<div style="width: 100%; font-size: 12px; word-break: break-all;">
        <h2>title</h2>
        <h5>subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitleend</h5>
        <p>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</p>
        <p>总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你end</p>
        <p>总问你总问你</p>
    </div>`;

    try {
        webPrint(htmlData, options)
    } catch (e) {
        console.log(e);
    }
}