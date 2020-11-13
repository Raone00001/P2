const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var division1, division2, division3, division4, division5, division6, division7;

var particles;
var plinkos = [];

var score = 0;
var turn = 0;

var gameState = "PLAY";

function setup() {
  var canvas = createCanvas(485,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,height,800,20);

    division1 = new Division(5,700,10,300);
    division2 = new Division(85,700,10,300);
    division3 = new Division(165,700,10,300);
    division4 = new Division(240,700,10,300);
    division5 = new Division(325,700,10,300);
    division6 = new Division(400,700,10,300);
    division7 = new Division(480,700,10,300);

    for(var i = 40; i <= width; i = i+50){

        plinkos.push(new Plinko(i,75));
        console.log(plinkos);

    }

    for(var i = 15; i <= width-10; i = i+50){

      plinkos.push(new Plinko(i,175));
      console.log(plinkos);

    }

    for(var i = 40; i <= width; i = i+50){

      plinkos.push(new Plinko(i,275));
      console.log(plinkos);

    }

    for(var i = 15; i <= width; i = i+50){

      plinkos.push(new Plinko(i,375));
      console.log(plinkos);

    }

    Engine.run(engine);
  }

function draw() {
  background("black");
  Engine.update(engine);  

  fill("white");
  textSize(25);
  textFont("Gabriel");
  text("Score: " + score, 10, 50);

  text("100", 260, 570);
  text("200", 185, 570);
  text("300", 345, 570);
  text("400", 105, 570);
  text("500", 420, 570);
  text("600", 25, 570);

  stroke("white");
  line(0,540,485,540);

  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  if (turn > 10){

      gameState = "end";

      textSize(50);
      text("Game Over", 120,235);

     }

  //To get 100 points.
  if (particles != null){

      particles.display();

        if(particles.body.position.y > 550){

            if(particles.body.position.x < 270 && particles.body.position.x > 250){

                score = score+100;
                particles = null;

                //if (turn >= 5) gameState = "end";

            }
      
        }

  }

    //To get 200 points.
    if (particles != null){

      particles.display();

        if(particles.body.position.y > 550){

            if(particles.body.position.x < 195 && particles.body.position.x > 175){

                score = score+200;
                particles = null;

                //if (turn >= 5) gameState = "end";

            }
      
        }

  }

  //To get 300 points.
  if (particles != null){

    particles.display();

      if(particles.body.position.y > 550){

          if(particles.body.position.x < 355 && particles.body.position.x > 335){

              score = score+300;
              particles = null;

              //if (turn >= 5) gameState = "end";

          }
    
      }

  }

  //To get 400 points.
  if (particles != null){

    particles.display();

      if(particles.body.position.y > 550){

          if(particles.body.position.x < 115 && particles.body.position.x > 95){

              score = score+400;
              particles = null;

              //if (turn >= 5) gameState = "end";

          }
    
      }

  }

  //To get 500 points.
  if (particles != null){

    particles.display();

      if(particles.body.position.y > 550){

          if(particles.body.position.x < 430 && particles.body.position.x > 410){

              score = score+500;
              particles = null;

              //if (turn >= 5) gameState = "end";

          }
    
      }

  }

  //To get 600 points.
  if (particles != null){

    particles.display();

      if(particles.body.position.y > 550){

          if(particles.body.position.x < 35 && particles.body.position.x > 15){

              score = score+600;
              particles = null;

              //if (turn >= 5) gameState = "end";

          }
    
      }

  }

 // if (frameCount % 15 === 0){

    //particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));

  //}

  for(var j = 0; j < plinkos.length; j++){

      plinkos[j].display();

  }

  //for(var k = 0; k < particles.length; k++){

     // particles[k].display();

  //}


}

function keyPressed(){

    if (keyCode === 32){

      if (gameState != "end"){

        turn++;

        particles = new Particle(mouseX, 10,10,10);
        
      }

    }

}