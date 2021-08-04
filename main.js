nosex=0;
nosey=0;

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function take_snapshot(){
    save('MyfilteredImg.png');
}

function draw(){
    image(video,0,0,300,300);
    image(img,nosex,nosey,70,70);
}

function modelLoaded(){
    console.log("PoseNet is intialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-15;
        console.log("Nose X="+nosex);
        console.log("Nose Y="+nosey);
    }
}

function preload(){
    img=loadImage('https://i.postimg.cc/28mmbxdf/download.png');
}