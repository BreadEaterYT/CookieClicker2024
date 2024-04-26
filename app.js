const { ipcMain, app, BrowserWindow } = require("electron")
const path = require("path")
const fs = require("fs")

fs.mkdir(`${process.env.APPDATA}/CookieClicker2024`, () => {})

function createWindow(){
    const window = new BrowserWindow({
        title: "CookieClicker 2024",
        minWidth: 900,
        minHeight: 720,
        icon: path.join(__dirname, "assets/img/icon.png"),
        autoHideMenuBar: true,
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
            preload: path.join(__dirname, "assets/js/preload.js")
        }
    })
    window.loadFile(path.join(__dirname, "views/main.html"))
}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})
  
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})