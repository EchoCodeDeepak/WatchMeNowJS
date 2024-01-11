





const interval = setInterval(function () {
    var Watch = document.getElementById("Watch");
    var d = new Date();
    Watch.innerText = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}, 1000);

function StartWatch() {
    const interval = setInterval(function () {
        var Watch = document.getElementById("Watch");
        var d = new Date();
        Watch.innerText = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }, 1000);
}

function stopWatch() {
    clearInterval(interval);
}
