document.getElementById('lock').onclick = function() {
    require('electron').ipcRenderer.send('lock')
}
