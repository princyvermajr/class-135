video="";

function preload(){
video=createVideo("video");

}
function setup(){
canvas=createCanvas(500,400);
canvas.center();
video.hide();
}
function draw(){
image(video,0,0,500,400);
}