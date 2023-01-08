const myAudio = document.querySelector("#music audio");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function playClick() {
    myAudio.play();
}
playBtn.addEventListener("click", playClick);

function stopClick() {
    myAudio.pause();
}
stopBtn.addEventListener("click", stopClick);

function resetClick() {
    myAudio.load();
}
resetBtn.addEventListener("click", resetClick);
