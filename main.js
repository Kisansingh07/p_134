function setup(){
   video = createCapture(VIDEO) ;
   video.size(560,500);

   canvas =createCanvas(550,550);
   canvas.position(600,150);

   poseNet = ml5.poseNet(video,modelLoded);
   poseNet.on('pose', gotPoses);
}

function draw(){
    background('#808080');
}

function modelLoded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}