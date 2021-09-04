nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;
function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    x = ml5.poseNet(video, gotposes);
    x.on('pose', poses);
}
function gotposes(){
    console.log("got poses from posenet library");
}