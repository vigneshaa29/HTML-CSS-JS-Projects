let HRS = document.getElementById("hrs");
let MIN = document.getElementById("min");
let SEC = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();
    HRS.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    MIN.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    SEC.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
},1000)
