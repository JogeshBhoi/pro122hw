function preload() {
}


function setup() {
    canvas = createCanvas(640, 480);
    canvas.postion(110, 250,);
    video = createCapture(VIDEO);
    video.hide();

}


function draw() {
    circle(30, 30, 20);
    rect(30, 20, 55, 55);
}


function take_snapshot(){
    save('student_name.png');
}