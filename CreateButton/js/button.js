var btn = document.getElementById("btn");
var cnt = 0;
btn.innerHTML = 0;
btn.onclick = function() {
    btn.innerHTML = ++cnt;
};