var l1,l2,l3;//lines
var c1,c2,c3,c4;//cars
var sp1;
var sp2;
var sp3;
var sp4;
var we1,sp1;//1) weight,speed
var we2,sp2;//2) weight,speed
var we3,sp3;//3) weight,speed
var we4,sp4;//4) weight,speed
function setup() {
  createCanvas(1350,655);
  //lines
  l1 =  createSprite(675,163.75,1350,10);
  l1.shapeColor = "white";
  l2 = createSprite(675,327.5,1350,10);
  l2.shapeColor = "white";
  l3 = createSprite(675,491.25,1350,10);
  l3.shapeColor = "white";

//moving objects
  c1 = createSprite(75,81.875,20,20);
  c1.shapeColor = "white";
  c2 = createSprite(75,245.625,20,20);
  c2.shapeColor = "white";
  c3 = createSprite(75,409.375,20,20); 
  c3.shapeColor = "white";
  c4 = createSprite(75,573.125,20,20);
  c4.shapeColor = "white";

//stoping object
  s1 = createSprite(1275,81.875,10,80);
  s1.shapeColor = "grey";
  s2 = createSprite(1275,245.625,10,80);
  s2.shapeColor = "grey";
  s3 = createSprite(1275,409.375,10,80);
  s3.shapeColor = "grey";
  s4 = createSprite(1275,573.125,10,80);
  s4.shapeColor = "grey";

sp1= random(40,80)
sp2= random(40,80)
sp3= random(40,80)
sp4= random(40,80)
//weight
  we1 = 2460;
  we2 = 2522;
  we3 = 1434;
  we4 = 3300;

}
function draw() {
  background(0);  
      var dr1 = 0.5*we1*sp1*sp1/22500;
      var dr2 = 0.5*we2*sp2*sp2/22500;
      var dr3 = 0.5*we3*sp3*sp3/22500;
      var dr4 = 0.5*we4*sp4*sp4/22500;


      c1.velocityX = sp1;
      c2.velocityX = sp2;  
      c3.velocityX = sp3; 
      c4.velocityX = sp4;

      if(c1.isTouching(s1)){
        c1.velocityX = 0;
        if(dr1>220){
          c1.shapeColor = "red";
          textSize(30);
          fill("red");
          text("Harmfull",300,81.875);
        }     
        if(dr1>100 &&dr1<220){
          c1.shapeColor = "yellow";
          textSize(30);
          fill("yellow");
          text("Average",300,81.875);
        }       
        if(dr1<100){
          c1.shapeColor = "green";
          textSize(30);
          fill("green");
          text("Good",300,81.875);
        }  
      }   
      if(c2.isTouching(s2)){
        c2.velocityX = 0;
        if(dr2>220){
          c2.shapeColor = "red";
          textSize(30);
          fill("red");
          text("Harmfull",300,245.625);
        }     
        if(dr2>100 && dr2<220){
          c2.shapeColor = "yellow";
          textSize(30);
          fill("yellow");
          text("Average",300,245.625);
        }       
        if(dr2<100){
          c2.shapeColor = "green";
          textSize(30);
          fill("green");
          text("Good",300,245.625);
        } 
      }
      if(c3.isTouching(s3)){
        c3.velocityX = 0;
        if(dr3>220){
          c3.shapeColor = "red";
          textSize(30);
          fill("red");
          text("Harmfull",300,409.375);
        }     
        if(dr3>100 && dr3<220){
          c3.shapeColor = "yellow";
          textSize(30);
          fill("yellow");
          text("Average",300,409.375);
        }       
        if(dr3<100){
          c3.shapeColor = "green";
          textSize(30);
          fill("green");
          text("Good",300,409.375);
        }
      } 
      if(c4.isTouching(s4)){
        c4.velocityX = 0;
        if(dr4>220){
          c4.shapeColor = "red";
          textSize(30);
          fill("red");
          text("Harmfull",300,573.125);
        }     
        if(dr4>100 && dr4<200){
          c4.shapeColor = "yellow";
          textSize(30);
          fill("yellow");
          text("Average",300,573.125);
        }       
        if(dr4<100){
          c4.shapeColor = "green";
          textSize(30);
          fill("green");
          text("Good",300,573.125);
        }   
      } 
             
              
       
                   
  drawSprites();
}