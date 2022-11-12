logs = "";
log1 = "";
window.onload = function () {
    var el = document.getElementById('check');
    if (el) {
        el.addEventListener('click', e => {
            log1 = "isTrusted:" + e.isTrusted + ", X:" + e.x + ", Y:" + e.y + ", timeStamp:" + e.timeStamp + ", altKey:" + e.altKey + "\n";
            logs += (log1);
            console.log(e);
        });
        el.addEventListener("mouseover", e => {
            log1 = "Type: mouseover | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
            logs + log1;
        })
        el.addEventListener("dblclick", e => {
            log1 = "Type: dblclick | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
            logs += (log1);
            i = i + 1;
        })
        el.addEventListener("contextmenu", e => {
            log1 = "Type: contextmenu | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
            logs += (log1);
            i = i + 1;
        })
        el.addEventListener("mouseleave", e => {
            log1 = "Type: mouseleave | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
            logs += (log1);
            i = i + 1;
        })
        el.addEventListener("mousemove", e => {
            log1 = "Type: mousemove | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
            logs += (log1);
            i = i + 1;
        })

        el.addEventListener("mouseup", e => {
            log1 = "Type: mouseup | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
            logs += (log1);
            i = i + 1;
        })
        el.addEventListener("mousedown", e => {
            log1 = "Type: mousedown | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
            logs += (log1);
            i = i + 1;
        })
    }

    document.getElementById('logs').onclick = function (code) {
        this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(logs);
    };
};
