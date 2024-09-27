import { BrowserWindow, ipcMain } from 'electron';
import { join } from "path";

export function webPrint(printHtml, options) {
    let mainWindow = new BrowserWindow({
        width: options.width * 4,
        height: options.height * 4,
        show: !!options.preview,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.on('closed', () => {
        mainWindow = null as any;
    });

    mainWindow.loadFile(options.pathTemplate || join(__dirname, "renderer/index.html"));

    mainWindow.webContents.on('did-finish-load', async () => {
        mainWindow.webContents.send('render-html', printHtml)
        ipcMain.once('render-html-reply', () => {
            console.log('options', options)
            if (!options.preview) {
                mainWindow.webContents.print({
                    silent: !!options.silent,
                    printBackground: !!options.printBackground,
                    deviceName: options.printerName || options.deviceName,
                    copies: options?.copies || 1,
                    pageSize: { width: options.width * 1000, height: options.height * 1000 },
                    ...(options.header && { color: options.header }),
                    ...(options.footer && { color: options.footer }),
                    ...(options.color && { color: options.color }),
                    ...(options.printBackground && { printBackground: options.printBackground }),
                    ...(options.margins && { margins: options.margins }),
                    ...(options.landscape && { landscape: options.landscape }),
                    ...(options.scaleFactor && { scaleFactor: options.scaleFactor }),
                    ...(options.pagesPerSheet && { pagesPerSheet: options.pagesPerSheet }),
                    ...(options.collate && { collate: options.collate }),
                    ...(options.pageRanges && { pageRanges: options.pageRanges }),
                    ...(options.duplexMode && { duplexMode: options.duplexMode }),
                    ...(options.dpi && { dpi: options.dpi }),
                }, (success, failureReason) => {
                    console.log('success---------->>', success);
                    console.log('failureReason---------->>', failureReason);
                    mainWindow.close();
                })
            }
        });
    });
}
