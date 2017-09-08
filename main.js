const lockscreen = require('lockscreen').default;
const menubar = require('menubar')({width: 100, height: 40})

menubar.on('ready', function () {
    require('electron').ipcMain.on('lock', () => {
        console.log('lock now')
        lockscreen()
    })
})
