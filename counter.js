let timer;
let timeLeft = 25 * 60;
let running = false;
const display = document.getElementById("timer");

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");
    display.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                running = false;
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateDisplay();
    running = false;
}

function stopTimer() {
    clearInterval(timer);
    
    running = false;
}

function setMode(minutes) {
    clearInterval(timer)
    timeLeft = minutes * 60;
    updateDisplay();
    running = false;
}
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("short_break").addEventListener("click", () => setMode(5));
document.getElementById("long_break").addEventListener("click", () => setMode(15));


updateDisplay();
