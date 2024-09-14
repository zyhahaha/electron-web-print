import { BrowserWindow } from 'electron';
import { join } from "path";

export function webPrint(printHtml, options) {
    let mainWindow = new BrowserWindow({
        width: options.width,
        height: options.height,
        // ...parsePaperSize(options.pageSize),
        show: !!options.preview,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.loadFile(options.pathTemplate || join(__dirname, "renderer/index.html"));

    mainWindow.webContents.on('did-finish-load', async () => {
        mainWindow.webContents.send('render-html', printHtml)
    });
}
