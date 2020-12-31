const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box16,box15,box14,box13,box12,box11,box10,box9,box8,box7,box6,box5,box4,box3,box2,box1;
var box25,box24,box23,box22,box21,box20,box19,box18,box17;
var ground1,ground2,ground;
var polygon;
var slingshot;
var bg="bg1.jpg";
var score=0;
var backgroundImg;

function preload(){

polygonImage=loadImage("polygon.png");

getBackgroundImage();
}




function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    ground1 = new Ground(415,330,250,10);
    ground2 = new Ground(750,200,190,10);
    ground = new Ground(500,400,1000,10);
    //1
    box16 = new Box(355,320,25,30);
    box15 = new Box(375,320,25,30);
    box14 = new Box(395,320,25,30);
    box13 = new Box(415,320,25,30);
    box12 = new Box(435,320,25,30);
    box11 = new Box(455,320,25,30);
    box10 = new Box(475,320,25,30);
    //2
    box9 = new Box(375,300,25,30);
    box8 = new Box(395,300,25,30);
    box7 = new Box(415,300,25,30);
    box6 = new Box(435,300,25,30);
    box5 = new Box(455,300,25,30);
    //3
    box4 = new Box(395,280,25,30);
    box3 = new Box(415,280,25,30);
    box2 = new Box(435,280,25,30);
    //4
    box1 = new Box(415,260,25,30);

    //1
    box25 = new Box(700,190,25,30);
    box24 = new Box(725,190,25,30);
    box23 = new Box(755,190,25,30);
    box22 = new Box(775,190,25,30);
    box21 = new Box(795,190,25,30);
    //2
    box20 = new Box(725,170,25,30);
    box19 = new Box(755,170,25,30);
    box18 = new Box(775,170,25,30);
    //3
    box17 = new Box(755,150,25,30);

    slingshot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw(){

        if(backgroundImg){
            background(backgroundImg);
            }
            Engine.update(engine);
        

        noStroke();
        textSize(25);
        fill(255, 0, 238);
        text("score "+score,800,30);


        imageMode(CENTER);
        image(polygonImage,polygon.position.x,polygon.position.y,40,40);

        
        ground1.display();
        ground2.display();
        ground.display();
        fill("rgb(37, 247, 243)")
        box16.display();
        box16.score();
        box15.display();
        box15.score();
        box14.display();
        box14.score();
        box13.display();
        box13.score();
        box12.display();
        box12.score();
        box11.display();
        box11.score();
        box10.display();
        box10.score();
        fill("rgb(6, 221, 28)")
        box9.display();
        box9.score();
        box8.display();
        box8.score();
        box7.display();
        box7.score();
        box6.display();
        box6.score();
        box5.display();
        box5.score();
        fill("rgb(247, 240, 37)")
        box4.display();
        box4.score();
        box3.display();
        box3.score();
        box2.display();
        box2.score();
        fill("rgb(211, 2, 2)")
        box1.display();
        box1.score();
        fill("rgb(32, 4, 244)")
        box25.display();
        box25.score();
        box24.display();
        box24.score();
        box23.display();
        box23.score();
        box22.display();
        box22.score();
        box21.display();
        box21.score();
        fill("rgb(20, 160, 1)")
        box20.display();
        box20.score();
        box19.display();
        box19.score();
        box18.display();
        box18.score();
        fill("rgb(97, 1, 160)")
        box17.display();
        box17.score();

        textSize(20);
        fill(242, 119, 4);
        stroke(242, 119, 4);
        strokeWeight(1);
        text( "Drag the Hexagon Stone and Release it, to launch it towards the blocks",50,30);

        

    }

    function mouseDragged(){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    }
    
    
    function mouseReleased(){
        slingshot.fly();
    }
    function keyPressed(){
        if(keyCode === 32){
        slingshot.attach(this.polygon);
        
        }
    }
    async function getBackgroundImage(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
        console.log(responseJSON);
        console.log(responseJSON.datetime);
        var datetime = responseJSON.datetime;
        var hour=datetime.slice(11,13);
        if(hour>=06 && hour<=19 ){
        bg="bg2.jpg";
        
        }else{
         bg="bg1.jpg";  
        }
        backgroundImg=loadImage(bg);
        
        }
