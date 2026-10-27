let song;
let amplitude;

function preload() {
    song = loadSound("../sound/locket.mp3");
}

function setup() {
    createCavas(windowWidth, windowHeight);
    amplitude = new p5.Amplitude();
    amplitude.setInput(song);
}

function draw() {
    const level = amplitude.getLevel();
}
