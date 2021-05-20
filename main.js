nosex=0;
nosey=0;
difference=0;
rightwristx=0;
leftwristx=0;

function setup(){
 video=createCapture(VIDEO);
 video.size(500, 650);
    
 canvas=createCanvas(550, 550);
 canvas.position(420, 140);
 
 poseNet=ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}
    
function modelLoaded(){
 console.log('PoseNet is on');
}
function draw(){
    background('#90EE90');
    document.getElementById("square_sides").innerHTML="width and hieght of the square will be"+difference;
    fill('#40e0d0');
    stroke('#FFA500');
    square(nosex, nosey, difference);
}
    
function gotPoses(results){
 if (results.length >0){
     console.log(results);
     nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex = "+nosex+"nosey = "+nosey)
   
   leftwristx=results[0].pose.leftWrist.x;
   rightwristx=results[0].pose.rightWrist.x;
   difference=floor(leftwristx- rightwristx);
   console.log("leftwristx = "+leftwristx+"rightwristx = "+rightwristx+"difference ="+ difference);
 }
}
