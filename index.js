const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/imagenes/vivoplay.png',
        title: 'VivoPlay App'
    });

    mainWindow.setTitle("VivoPlay");
    mainWindow.setAutoHideMenuBar(true)
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file',
        slashes: true
    }))

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});