let time = document.getElementById('givetime');
let date = document.getElementById('givedate');


function set_Time_Date(){
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();

if(seconds < 10){
    seconds = '0' + seconds;
}

if(minutes < 10){
    minutes = '0' + minutes;
}

if(hours < 10){
    hours = '0' + hours;
}

if(day < 10){
    day = '0' + day;
}

if(month < 10){
    month = '0' + month;
}



let currentTime = hours + ' : ' + minutes + ' : ' + seconds ;

let currentDate = day + ' - ' + month + ' - ' + year;

time.textContent = currentTime;
date.textContent = currentDate;

}

setInterval(set_Time_Date,1000);

set_Time_Date();


