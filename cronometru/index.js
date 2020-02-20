const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resumeButton = document.querySelector('.resume');
const stopButton = document.querySelector('.stop');

const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

// console.log(typeof minute.innerHTML);
// console.log(typeof minute.innerHTML, minute.innerHTML);
// console.log(typeof +minute.innerHTML, +minute.innerHTML)

let entry = 0;
let pause = false;
const startChronometer = (seconds) => {
    pause = false;
    if (entry === 0) {
        console.log('chronometer started');
        // Clear chronometer
        clearChronometer();
        //

        // Count seconds
        let numberOfSeconds = seconds;
        entry ++;
        const countInterval = setInterval((numberOfSeconds) => {
            if(!pause) {
                seconds++;
                if (seconds % 60 === 0) {
                    seconds = 0;
                    if(+minute.innerHTML < 9) {
                        minute.innerHTML = '0' + (+minute.innerHTML + 1);
                    } else {
                        minute.innerHTML = +minute.innerHTML + 1;
                    }
                }
                // Update Chronometer
                updateChronometer(seconds);
            }
        },2);

        const stopChronometer = () => {
            console.log('chronometer stopped', entry);
            clearInterval(countInterval);
            entry = 0;
        }
        
        const resumeChronometer = () => {
            pause = false;
            console.log('chronometer resumed');
        }

        const pauseChronometer = () => {
            pause = true;
            resumeButton.addEventListener('click', () => resumeChronometer());
            console.log('chronometer paused');
        }

        stopButton.addEventListener('click', () => stopChronometer());
        pauseButton.addEventListener('click', () => pauseChronometer());
    }
}

const updateChronometer = (number) => {
    if(number < 10) {
        second.innerHTML = '0' + number;
    }  else {
        second.innerHTML = number;
    }
}

const clearChronometer = () => {
    second.innerHTML = '00';
    minute.innerHTML = '00';
    hour.innerHTML = '00';
}
startButton.addEventListener('click', () => startChronometer(0));