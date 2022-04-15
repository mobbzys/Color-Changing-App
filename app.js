// get variables
const siteBody = document.querySelector("body");
const displayHex = document.querySelector(".color_code");

// randomally change the htmls to show on screen
const validcharacters = '0123456789ABCDEF';
const hexCode = 6;

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNextColor() {
    let color = "#";
    for ( let i = 0; i < 6; i++ ) {
        let getRandomChar = validcharacters.charAt(randomInt(0, 15));
        color += getRandomChar;
    };
    displayHex.innerHTML = color;
    siteBody.style.backgroundColor = color;
}

// space bar press to change the colors on screen
document.addEventListener('keydown', (e) => {
    if (e.code === "Space") {
        getNextColor();
    }
});