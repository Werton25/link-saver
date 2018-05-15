const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let window;

function createWindow() {
  window = new BrowserWindow({width: 800, height: 600});
  const urlStr = url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });

  window.loadURL(urlStr);
  window.openDevTools();

  window.on('closed', function () {
    window = null
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (window === null) {
    createWindow()
  }
});
