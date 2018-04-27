const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function createWindow() {
  const window = new BrowserWindow({width: 800, height: 600});
  const urlStr = url.format({
    pathname: path.join(__dirname, './app/index.html'),
    protocol: 'file',
    slashes: true
  });

  window.loadURL(urlStr);
  window.openDevTools();
}

app.on('ready', createWindow);
