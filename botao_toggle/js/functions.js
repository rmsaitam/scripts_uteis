// $ ( document ).ready(function() {
    var dark = document.getElementById('btnDark');
    var light = document.getElementById('btnLight');
    var body = document.querySelector('body');
    dark.onclick = function(){
        body.className = "dark";
    }

    light.onclick = function(){
        body.className = "light";
    }
// });


