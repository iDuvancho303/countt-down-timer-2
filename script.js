const countdown = () => {
    const countDate = new Date('Mar 14, 2022 16:00:00').getTime();
    const  now = new Date().getTime();
    const gap = countDate - now;

const seconds = 1000;
const minutes = second * 60;
const hour = minutes * 60;
const day = hours * 24;

let timeDays = Math.floor(gap / day);
let timeHours = Math.floor((gap % day) / hour);
let timeMinutes = Math.floor((gap % hour) / minutes);
let timeSeconds = Math.floor((gap % minutes) / seconds);

document.querySelector(".day").innerHTML = timeDays;

};

