// Require Electron and Node.js modules
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var Tray = electron.Tray;
const {ipcMain} = require('electron');

var path = require('path');
var url = require('url');


// Global reference of the window object
var win;


function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: true, 
        frame: false 
	});

	//Add Tray icon
	var tray = new Tray('app_icons/Icon.png');
	// tray.setTitle('counter');

	// ipcMain.on('update-score', function(event, arg) {

	// 	tray.setTitle(arg);
	// });

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'www/index.html'),
        protocol: 'file:',
        slashes: true
    }));



    // Emitted when the window is closed.
    win.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        app.quit();
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
        app.quit();
});
