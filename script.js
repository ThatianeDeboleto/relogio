function clock() {
    //objeto
    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');
    //horas minutos segundos
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    //horas objeto
    hour.innerHTML = h;
    //minutos // //
    minute.innerHTML = m;
    //segundos // //
    second.innerHTML = s;
}

var interval = setInterval(clock, 1000);