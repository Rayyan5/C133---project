img = "";
objects = [];
status = "";

function preload(){
    img = loadImage('book.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}


function draw() {

    if(status != ""){
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object Detected";
    
          fill("#FF0000");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("#FF0000");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }


    image(img, 0, 640, 420);
    fill("#FF0000");
    text("Book", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );
}

function modelLoaded() {
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }

    console.log(results);
}