const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ="sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here
    gettime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
background(backgroundImg);
    Engine.update(engine);

    // write code to display time in correct format here
fill("red");
textSize(30);
if(hour>=12){
    text("Time :"+hour%12+" PM",50,100);
}
else if(hour==0){
    text("Time :12 AM",100,100);
}
else{
    text("Time :"+hour%12+" AM",50,100);
}
}



    
    
    
    
    async function gettime(){
  var  response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON= await response.json()

    
    datetime = responseJSON.datetime;
    hour =  datetime.slice(11,13);
    
    if(hour >=04 && hour <= 06){
       var bg = "sunrise1.png";
    }else if(hour >= 06 && hour <= 08){
       var bg = "sunrise2.png";
    }else if(hour >= 08 && hour <= 11){
       var bg = "sunrise3.png";
    }else if(hour >= 11 && hour <= 13){
       var bg = "sunrise4.png";
    }else if(hour >= 13 && hour <= 15){
       var bg = "sunrise5.png";
    }else if(hour >= 15 && hour <= 17){
       var bg = "sunrise6.png";
    }else if(hour >= 17 && hour <= 18){
       var bg = "sunset7.png";
}else if(hour >= 18 && hour <= 20){
    var bg = "sunset8.png";
 }
else if(hour >= 20 && hour <= 23){
    var bg = "sunset9.png";
 }
else if(hour >= 23 && hour ==0){
    var bg = "sunset10.png";
 }
else if(hour==0 && hour <= 03){
    var bg = "sunset11.png";
 }
    else {
        var bg = "sunset12.png";
    }
       backgroundImg = loadImage(bg);
    }


