// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
const isDevelopment = process.env.NODE_ENV !== "production";
let serverWindow;
let clientWindow;

function createClientWindow() {
  // Create the browser window.
  clientWindow = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  if (isDevelopment) {
    clientWindow.loadURL("http://127.0.0.1:8080");
  } else {
    clientWindow.loadFile("public/index.html");
  }

  // Open the DevTools.
  // clientWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  clientWindow.on("closed", function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    clientWindow = null;
  });
}

function createServerWindow() {
  // Create the browser window.
  serverWindow = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  if (isDevelopment) {
    serverWindow.loadURL("http://127.0.0.1:3333");
  } else {
    serverWindow.loadURL("http://127.0.0.1:3333");
  }

  // Open the DevTools.
  // serverWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  serverWindow.on("closed", function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    serverWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", function() {
  createClientWindow();
  createServerWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (serverWindow === null) {
    createClientWindow();
    createServerWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
