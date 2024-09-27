# Electron-web-print
It currently supports versions of electron >= 6.x.x

### Installation
```bash
$ npm install electron-web-print
$ yarn add electron-web-print
```

### Example code
```typescript
import { webPrint } from "electron-web-print";

// options详细参数见：https://www.electronjs.org/docs/latest/api/web-contents#contentsprintoptions-callback
const options = {
    preview: false, // 打印预览
    silent: true, // 静默打印
    width: 76, // 纸张宽度，单位：mm
    height: 130, // 纸张高度，单位：mm
    printBackground: true,
    printerName: 'HPRT N41', // XP-58 (副本 1)、HPRT N41
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
