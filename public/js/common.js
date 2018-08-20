function createLog(message) {
    var div = document.createElement('div');
    div.innerHTML = JSON.stringify(message);
}