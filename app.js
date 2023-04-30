// import easel from 'easeljs';
// var stage = new easel.Stage("canvas");

boat = {};
windDirection = 180;

function init() {
    console.log("init ran");

    stage = new createjs.Stage("canvas");
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleTick);

   

    var background = new createjs.Shape();
    background.graphics.beginFill("#00f").drawRect(0, 0, 1900, 200);
    background.name = "background";
    background.x = 0;
    background.y = 0;
    stage.addChild(background);
    setBoat()
    stage.update();
}

function setBoat() {
    console.log("setBoat ran");
    boat = new createjs.Shape();
    boat.graphics.beginFill("red").beginStroke("black");
    
    var sail = new createjs.Shape();
    sail.graphics.beginFill("#000000");
    sail.graphics.drawRect(0, 0, 40, 120);
    sail.x = boat.x - 20; // place the center of the sail horizontally centered with the boat
    sail.y = boat.y - 60;
    boat.graphics.moveTo(12, 0).lineTo(6, -20).lineTo(0, 0).closePath();
    boat.regX = 6;
    boat.regY = -10;
    boat.rotation = 270;
    boat.name = "boat";
    boat.x = 1900;
    boat.y = 100;
    boat.speed = 0.001;
    stage.addChild(boat);


    stage.update();
}

function handleTick(event) {
    // Actions carried out each tick (aka frame)
    if(boat.rotation > 360){boat.rotation = boat.rotation - 360;}
    if(boat.rotation < 0){boat.rotation = boat.rotation + 360;}
    boat.speed = boat.speed + calculateAcceleration(boat.rotation, boat.speed);
    console.log(boat.rotation);
    var {x, y} = calculateMovement(boat.speed, boat.rotation);
    boat.x = boat.x + x;
    boat.y = boat.y + y;
    stage.update();
}

function calculateMovement(speed, rotation) {
    var radians = rotation * Math.PI / 180; // convert the rotation angle to radians
    var dx = Math.sin(radians) * speed; // calculate the horizontal component of the movement
    var dy = -Math.cos(radians) * speed; // calculate the vertical component of the movement (note the negative sign)
    return { x: dx, y: dy };
}

function calculateAcceleration(boatDirection, boatSpeed){
    var diff = Math.abs((boatDirection + 180), (windDirection + 180)) ;
    console.log(boatDirection + '-->', Math.sin(degToRad(diff)));
    return 0
}

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
  }
  
  function radToDeg(rad) {
    return rad / (Math.PI / 180);
  }



window.onload = function () {
    init();
}