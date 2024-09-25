# Electron-web-print
It currently supports versions of electron >= 6.x.x

### Installation
```bash
$ npm install electron-pos-printer
$ yarn add electron-pos-printer
```

### Example code
```typescript
import { webPrint } from "electron-web-print";

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
    <p>中文中文中文中文</p>
    <p>中文</p>
</div>`;

try {
    webPrint(htmlData, options)
} catch (e) {
    console.log(e);
}
```
