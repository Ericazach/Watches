

function getTheTime (){
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.querySelector(".clock").innerText =time
}

setInterval(getTheTime, 1000)

function getTheTime2() {
    const date = new Date();
    const hora = date.getHours();
    const minutos = date.getMinutes();
    const segundos = date.getSeconds();
    document.querySelector(".hours").innerText = hora
    document.querySelector(".minutes").innerText = minutos
    document.querySelector(".seconds").innerText = segundos
}

const stopBtn = document.querySelector(".stopBtn");
const startBtn = document.querySelector(".startBtn");

stopBtn.onclick = function () {
    stopClock();
}

startBtn.onclick = function () {
    setInterval(getTheTime2, 1000) ;
}

const clock1 = setInterval(getTheTime2, 1000);

function stopClock() {
    clearInterval(clock1)
}



// Get this reference, just once outside of the function that it will be needed in
// instead of on each invocation of the function.
let clock = document.getElementById('clock');
let timer = null;  // The timer variable is null until the clock initializes

// This is the modern way to set up events
clock.addEventListener("click", function(){
  // If the clock is ticking, pause it. If not, start it
  if(timer !== null){
    clearInterval(timer);  // Cancel the timer
    timer = null;  // Reset the timer because the clock is now not ticking.
  } else {
    timer = setInterval(runClock, 1000);
  }
});

// Get a reference to the timer and start the clock
timer = setInterval(runClock, 1000);

function runClock() {
    // .innerText is non-standard. Use .textContent instead.
    // .toLocaleTimeString() gets you the locale format of the time.
    clock.textContent = new Date().toLocaleTimeString();            
}
