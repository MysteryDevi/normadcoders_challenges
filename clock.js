const clock = document.getElementById("clock");
const date = document.getElementById("date");
function getTime() {
    const Day = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minutes}:${seconds}`;
    date.innerText = `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()}  ${Day[time.getDay()]}.`;
}
getTime();
setInterval(getTime, 1000);