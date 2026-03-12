document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    


    let startTime;
    let elapsedTime = 0;
    let timerInterval;
    let isRunning = false;
    

    // Function to format time into HH:MM:SS.ms
    function formatTime(ms) {
        const date = new Date(ms);
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0'); // Get 2 digits for ms

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    // Function to update the display
    function updateDisplay() {
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;
        display.textContent = formatTime(elapsedTime);
    }

    // Start Stopwatch
    function startStopwatch() {
        if (!isRunning) {
            isRunning = true;
            startTime = Date.now() - elapsedTime; // Adjust startTime for resuming
            timerInterval = setInterval(updateDisplay, 10); // Update every 10ms for milliseconds

            startBtn.disabled = true;
            pauseBtn.disabled = false;
            resetBtn.disabled = false;
         
        }
    }

    
        // Pause Stopwatch
function pauseStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        // The line you need to add goes here
    }
}
    

    // Reset Stopwatch
    function resetStopwatch() {
        pauseStopwatch(); // First pause it if running
        elapsedTime = 0;
        display.textContent = formatTime(elapsedTime);
    
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        resetBtn.disabled = true;
        
    }

    // Record Lap
    //function recordLap() {
      //  if (isRunning) {
         //   lapCounter++;
           // const lapTime = formatTime(elapsedTime);
            //const li = document.createElement('li');
            //li.innerHTML = `<span>Lap ${lapCounter}:</span> <span>${lapTime}</span>`;
            //lapsList.prepend(li); // Add new lap at the top
        //}
   // }

    // Event Listeners
    startBtn.addEventListener('click', startStopwatch);
    pauseBtn.addEventListener('click', pauseStopwatch);
    resetBtn.addEventListener('click', resetStopwatch);
    

    // Initial state on load
    resetStopwatch(); // Ensure buttons are correctly disabled on page load
});