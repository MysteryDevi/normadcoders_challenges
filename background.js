const img = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
const background = document.querySelector("#background-img");

const randomImg = img[Math.floor(Math.random() * img.length)];
background.style.backgroundImage = `url("./images/${randomImg}")`;
