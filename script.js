// Sine I lose my mind reading old codes, adding notes in 1, 2, 3 ...


//This js contains notes for future reference

//Define vars for time values
let seconds= 0;
let minutes = 0;
let hours = 0;

//vars values to hold display values again
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//var to set time interval
let interval = null;

// initial status stopwatch
let status = "stopped";

//function to make stopwatch tick
function tickingBomb() {
    seconds++;
    // to determine increase of minute
    if (seconds/60 === 1){
        seconds = 0;
        minutes++;
     // to determine increase of hour
        if(minutes/60 === 1){
        minutes = 0;
        hours++;
        }
    }

    //if values are one digit 
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    //display code update
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds

}

//set when you want function to be called


//function for button using set interval after null
function startStop(){
    
    if(status === "stopped"){

        //start stopwatch and switch start stop
        interval = window.setInterval(tickingBomb, 1000);
        document.getElementById("startStop").innerHTML = "STOP";
        status = "started";
    } else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "START";
        status = "stopped";
    }

}

//Reset function
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "START";
}