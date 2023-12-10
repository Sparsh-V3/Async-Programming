let hour = document.querySelector(".hours");
let min = document.querySelector(".minutes");
let sec = document.querySelector(".seconds");
let msec = document.querySelector(".miliseconds");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let m, r;

start.addEventListener("click", function(){
    m = setInterval(function mili(){
        miliseconds++;
        let ms_remains = Math.floor(miliseconds % 100);
        msec.textContent = ms_remains;
    },10);
    r = setInterval(function time(){
        hours = Math.floor(minutes / 59);
        minutes = Math.floor(seconds / 59);
        seconds = Math.floor(miliseconds / 100)
        let s_remains = Math.floor(seconds % 60);
        let m_remains = Math.floor(minutes % 60);
        let h_remains = Math.floor(hours % 60);
        sec.textContent = s_remains;
        min.textContent = m_remains;
        hour.textContent = h_remains;
    },1000);
})

pause.addEventListener("click", function(){
    clearInterval(m, r);
})

reset.addEventListener("click", function(){
    clearInterval(m, r);
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    hour.textContent = `${hours}`;
    min.textContent = `${minutes}`;
    sec.textContent = `${seconds}`;
    msec.textContent = `${miliseconds}`;
})