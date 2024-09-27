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

    // const htmlData = `<div style="width: 100%; font-size: 12px; word-break: break-all;">
    //     <h2>title</h2>
    //     <h5>subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitleend</h5>
    //     <p>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</p>
    //     <p>总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你总问你end</p>
    //     <p>总问你总问你</p>
    // </div>`;
    const htmlData = `<section id="main" style="width: 100%; margin: 0px auto;">
        <div style="font-weight: bold; font-size: 26px; letter-spacing: 2px; text-align: center;">顾客联</div>
        <div style="float: right; margin-top: -37px; margin-right: -10px;"><svg id="barCode-1" width="77px"
                height="64px" x="0px" y="0px" viewBox="0 0 77 64" xmlns="http://www.w3.org/2000/svg" version="1.1"
                style="transform: translate(0,0)">
                <rect x="0" y="0" width="77" height="64" style="fill:#ffffff;"></rect>
                <g transform="translate(10, 10)" style="fill:#000;">
                    <rect x="0" y="0" width="2" height="30"></rect>
                    <rect x="3" y="0" width="1" height="30"></rect>
                    <rect x="6" y="0" width="3" height="30"></rect>
                    <rect x="11" y="0" width="1" height="30"></rect>
                    <rect x="13" y="0" width="2" height="30"></rect>
                    <rect x="17" y="0" width="3" height="30"></rect>
                    <rect x="22" y="0" width="1" height="30"></rect>
                    <rect x="26" y="0" width="1" height="30"></rect>
                    <rect x="30" y="0" width="2" height="30"></rect>
                    <rect x="33" y="0" width="1" height="30"></rect>
                    <rect x="36" y="0" width="4" height="30"></rect>
                    <rect x="41" y="0" width="1" height="30"></rect>
                    <rect x="44" y="0" width="2" height="30"></rect>
                    <rect x="49" y="0" width="3" height="30"></rect>
                    <rect x="53" y="0" width="1" height="30"></rect>
                    <rect x="55" y="0" width="2" height="30"></rect><text style="font:bold 14px monospace"
                        text-anchor="middle" x="28.5" y="44">1235</text>
                </g>
            </svg></div>
        <div>店铺名称:邻医快药旗舰店</div>
        <div>付款时间:2022-01-02 12:15:10</div>
        <div>收件人:张贤士买贤合庄卖火锅</div>
        <div>收件人电话:13088692635</div>
        <div style="border-bottom: 1px dashed rgb(0, 0, 0); margin-bottom: 5px; padding-bottom: 5px;"></div>
        <div style="font-weight: bold; font-size: 16px;">卖家备注:今天下午走韵达16:00揽件走。</div>
        <div style="margin-bottom: 5px; font-weight: bold; font-size: 16px;">买家备注:麻烦早点发货，发韵达</div>
        <div
            style="display: flex; justify-content: space-between; width: 100%; padding-top: 10px; border-top: 1px solid;">
            <span style="display:inline-block">商品名称</span>
            <span style="display:inline-block">数量</span>
        </div>
        <div
            style="display: flex; justify-content: space-between; width: 100%; margin-bottom: 5px; padding-bottom: 10px; border-bottom: 1px dashed;">
            <span style="display:inline-block">1.【袋鼠医生】医用棉签8cm*50支</span>
            <span style="padding-right:10px;display:inline-block">1</span>
        </div>
        <div>商品简称:商品简称</div>
        <div>规格:标准装</div>
        <div>
            条形码:6946015125113&nbsp;&nbsp;&nbsp;
            SKU:a1236
        </div>
        <div>
            货位:6-2-3121&nbsp;&nbsp;&nbsp;

        </div>
        <div style="width: 100%; text-align: center; margin: 5px auto; border-bottom: 1px solid;"></div>
        <div
            style="display: flex; justify-content: space-between; width: 100%; margin-bottom: 5px; padding-bottom: 10px; border-bottom: 1px dashed;">
            <span style="display:inline-block">2.碘伏消毒液 100ml/瓶</span>
            <span style="padding-right:10px;display:inline-block">1</span>
        </div>
        <div>商品简称:商品简称</div>
        <div>规格:标准装</div>
        <div>
            条形码:6946015125113&nbsp;&nbsp;&nbsp;
            SKU:a1236
        </div>
        <div>
            货位:6-2-3121&nbsp;&nbsp;&nbsp;

        </div>
        <div style="width: 100%; text-align: center; margin: 5px auto; border-bottom: 1px solid;"></div>
        <div style="display: flex; justify-content: center;"><svg id="barCode-22" width="176px" height="50px" x="0px"
                y="0px" viewBox="0 0 176 50" xmlns="http://www.w3.org/2000/svg" version="1.1"
                style="transform: translate(0,0)">
                <rect x="0" y="0" width="176" height="50" style="fill:#ffffff;"></rect>
                <g transform="translate(10, 10)" style="fill:#000;">
                    <rect x="0" y="0" width="2" height="30"></rect>
                    <rect x="3" y="0" width="1" height="30"></rect>
                    <rect x="6" y="0" width="3" height="30"></rect>
                    <rect x="11" y="0" width="1" height="30"></rect>
                    <rect x="13" y="0" width="2" height="30"></rect>
                    <rect x="17" y="0" width="3" height="30"></rect>
                    <rect x="22" y="0" width="3" height="30"></rect>
                    <rect x="26" y="0" width="2" height="30"></rect>
                    <rect x="29" y="0" width="3" height="30"></rect>
                    <rect x="33" y="0" width="3" height="30"></rect>
                    <rect x="38" y="0" width="1" height="30"></rect>
                    <rect x="41" y="0" width="2" height="30"></rect>
                    <rect x="44" y="0" width="1" height="30"></rect>
                    <rect x="46" y="0" width="3" height="30"></rect>
                    <rect x="50" y="0" width="2" height="30"></rect>
                    <rect x="55" y="0" width="1" height="30"></rect>
                    <rect x="58" y="0" width="1" height="30"></rect>
                    <rect x="60" y="0" width="2" height="30"></rect>
                    <rect x="66" y="0" width="1" height="30"></rect>
                    <rect x="68" y="0" width="4" height="30"></rect>
                    <rect x="75" y="0" width="1" height="30"></rect>
                    <rect x="77" y="0" width="2" height="30"></rect>
                    <rect x="80" y="0" width="2" height="30"></rect>
                    <rect x="83" y="0" width="4" height="30"></rect>
                    <rect x="88" y="0" width="1" height="30"></rect>
                    <rect x="93" y="0" width="1" height="30"></rect>
                    <rect x="96" y="0" width="2" height="30"></rect>
                    <rect x="99" y="0" width="1" height="30"></rect>
                    <rect x="101" y="0" width="3" height="30"></rect>
                    <rect x="105" y="0" width="4" height="30"></rect>
                    <rect x="110" y="0" width="3" height="30"></rect>
                    <rect x="114" y="0" width="1" height="30"></rect>
                    <rect x="116" y="0" width="4" height="30"></rect>
                    <rect x="121" y="0" width="3" height="30"></rect>
                    <rect x="125" y="0" width="1" height="30"></rect>
                    <rect x="128" y="0" width="2" height="30"></rect>
                    <rect x="132" y="0" width="2" height="30"></rect>
                    <rect x="136" y="0" width="1" height="30"></rect>
                    <rect x="138" y="0" width="3" height="30"></rect>
                    <rect x="143" y="0" width="2" height="30"></rect>
                    <rect x="148" y="0" width="3" height="30"></rect>
                    <rect x="152" y="0" width="1" height="30"></rect>
                    <rect x="154" y="0" width="2" height="30"></rect>
                </g>
            </svg></div>
        <div style="text-align: center; font-size: 14px;">平台订单号：1223264565968968998</div>
    </section>`

    try {
        webPrint(htmlData, options)
    } catch (e) {
        console.log(e);
    }
}