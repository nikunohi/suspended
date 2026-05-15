
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================


////////////////////////////// 1 /////////////////
function splash()  {
    var textX;
    var textY;
    var loy= 0;  // exists as data saved when in the splash scene
    let btnevent1 =false;
   let btnevent2 =false;
   
    let video;
    
    frameRate(24);
   

    // scene1.setup
    this.setup = function() {
      console.log("We are at setup for splash");
    
      outputVolume(.25); 
      
  
    };

    
    this.enter = function()  {
        console.log("We are at entering splash");
        background("grey");
        textAlign(CENTER);
        textSize(30);
        noStroke();
           video = createVideo(['./assets/final-intro.mp4']);
      video.volume(0);
      video.hide();
      video.loop();
        
        snd1.stop();
       
        ghosty.visible = false;
      

    }


    this.draw = function()
    {
   
      
      background("lightblue");
      
     if (video) {
      
      image(video, 0, 0, 720, 720);
      
      if (video.time() >= 1.91836){
        video.stop();
        this.sceneManager.showNextScene();
        return;
      }
    }

    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);

        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function() {

     
    }
}



///////////////////////  2  ////////////////////////

function main()  {
   this.y = 0;
  
    this.lox = 50;
   
   this.loy = 120;
   

   let btnevent1 = false;
   let btnevent2 = false;
   let gallery;
   

  this.setup = function() {
      console.log("We are at setup for main");
     
      outputVolume(.25);   
           

      textFont(fontRegular);
 
  }

  this.enter = function()
  {
    console.log("We are at entering main");

  

    if ( !snd1.isPlaying() ) {
      snd1.play();
   }


  }




    this.draw = function() {
      background("#F23929");
 
    push();

    translate(width/2+20, height/2+30);
    noStroke();
    rotate(30);
    fill('#F77F79');
    rectMode(CENTER);
    square(0, 0, 40);
    stroke(1);
    
    pop();


             push();

    translate(550, 700);
    scale(7);
    noStroke();
    rotate(10);
    fill('#F77F79');
    rectMode(CENTER);
    square(0, 0, 40);
    stroke(1);
  
    pop();


    btnevent1 = checkButtonPress("Help",width-150,height-70,100,40,color('#ff707a'),color('white'),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      playhelpsound();
      this.sceneManager.showScene( help );
    }
   btnevent2 = checkButtonPress("START",width/2-60,height/2-15,120,40,color('#ff707a'),color('white'),color(250));
      if (btnevent2) {   // main or next scene
        btnevent2 = false;
         playshortsound();
         this.sceneManager.showScene(sybridge);
      }

        push();

    translate(50, 220);
    scale(3);
    noStroke();
    rotate(-10);
    fill('#F77F79');
    rectMode(CENTER);
    square(0, 0, 40);
    stroke(1);
    
    pop();

   

    }  //end

    this.mousePressed = function()
    {

    }


}



////////////////////////////// 3 /////////////////

function help() {
  let video3;
  frameRate(12);

    this.setup = function()  {
        console.log("We are at setup for help");

    }

    this.enter = function()
    {
     console.log("We are at entering for help");
video3 = createVideo(['./assets/help-bg-loop.mp4']);
      video3.volume(0);
      video3.hide();
      video3.loop();
    }

    this.draw = function() {
       textFont(fontRegular);
      background("white");
       
     if (video3) {
      image(video3, 0, 0, 720, 720);
      
      if (video3.time() >= 1.91836){
        video3.stop();
        this.sceneManager.showNextScene();
        return;
      }
    }
      fill("white");
      
      textAlign(LEFT);
      textSize(25*1.6);
      noStroke();
      textLeading(25*1.5);
      text( "Welcome to \nSUSPENDED \n" , 30,160);
      textSize(25);
      textLeading(25*1.2);
      text("This project examines dynamism \n& change over time! " , 30, 260);
      text( "WHEN USING THIS PROGRAM", 30, 370);
      text("ONCE YOU REACH THE FRAME CAROUSEL", 30, 550);
      textSize(25/1.6);
      textLeading(25*1.2/1.6);
      text("Click '1' to restart the program.\nClick '2' and click 'Start'! \nClick 'H' to open this menu again!" , 30, 392)

      text("Click '<'to see the previous frame, \nClick '>' to see the next frame! <\n'Scroll wheel' to freely zoom into & \nmore closely examine the frame.", 30, 572);
      

      

  



        
    }

   

}

function checkButtonPressCircle(str, cx, cy, radius, upcolor, ovcolor, dncolor) {
  let btnc = "";
  let btnstate = false;
  
  let d = dist(mouseX, mouseY, cx, cy);
  let overCircle = d < radius;

  if (overCircle) {
    if (!mouseIsPressed) {
      stroke(200);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }
  } else {
    stroke(255);
    btnc = upcolor;
  }

  push();
  translate(cx, cy);
  fill(btnc);
  ellipse(0, 0, radius * 2, radius * 2); 

  fill(200);
  noStroke();
  textSize(16);
  textAlign(CENTER, CENTER);
  text(str, 0, 0); 
  pop();

  return btnstate;
}

function checkButtonPressR(str, bx, by, boxW, boxH, upcolor, ovcolor, dncolor) {
  let btnc1 = "";
  let btnstate = false;
  let btnc2 = 200;

  let dx = mouseX - bx;
  let dy = mouseY - by;

  let localX = dy;
  let localY = -dx;

  if (
    localX > -boxW / 2 && localX < boxW / 2 &&
    localY > -boxH / 2 && localY < boxH / 2
  ) {
    overBox = true;

    if (!mouseIsPressed) {
      stroke(200);
      btnc1 = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc1 = dncolor;
      btnstate = true;
    }

  } else {
    btnc1 = upcolor;
    overBox = false;
  }

  push();
  translate(bx, by);
  rotate(90); 
  fill(btnc1);
  rectMode(CENTER);
  rect(0, 0, boxW, boxH, 15);
scale(2.25);
   fill(255, 255, 255);
  noStroke();
  textSize(16);
  textAlign(CENTER, CENTER);
 
  text(str, 0, 6.5); 
  pop();

  return btnstate;
}

function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor, boxr) {

  let btnc = "";
  let btnstate =false;
  boxr = 0;
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(200);
      btnc = ovcolor;
      btnstate = false;
      
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(255);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  rect(0, 0, boxW, boxH, 15 ); 
fill(200);
  noStroke();
  textSize(16);
  textAlign(CENTER);
  text (str,boxW/2,28);

    pop();

    return btnstate;

}



function playshortsound() {
  if ( !snd2.isPlaying() ) {
    snd2.play();
  } else {
     snd2.stop();
 }


}

function playhelpsound() {
  if ( !snd3.isPlaying() ) {
    snd3.play();
  } else {
     snd3.stop();
 }


}


////////////////////////////// 4 /////////////////
function sybridge()  {
    var textX;
    var textY;
    var loy= 0;  
    let btnevent1 =false;

   
    let video2;
    
    frameRate(24);
   

    // scene1.setup
    this.setup = function() {
      console.log("We are at setup for splash");
      
      outputVolume(.25); 
      
      
         
    };

    this.enter = function()  {
        console.log("We are at entering splash");
        background("grey");
        textAlign(CENTER);
        textSize(30);
        noStroke();
        video2 = createVideo(['./assets/final-com-fombined-bridge.mp4']);
      video2.volume(0);
      video2.hide();
      video2.loop();
        
        snd1.stop();
       
        ghosty.visible = false;
      

    }


    this.draw = function() {
   
     
      background("lightblue");
      
     if (video2) {
      
      image(video2, 0, 0, 720, 720);
      
      if (video2.time() >= 1.8){
        video2.stop();
        this.sceneManager.showScene(syframes09);
        return;
      }
    }



    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);

        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function() {

     
    }
}


function isMouseInsideCanvas() {
  console.log("itworks");
  return mouseX >= 0 && mouseX <= width &&
         mouseY >= 0 && mouseY <= height;
         
}

////////////////////////////// 5 /////////////////
function syframes09()  {

   
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes10);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes40);
      };

    let frame09;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame09 = loadImage(['./assets/frames-individual-09.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame09, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
       btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 6 /////////////////
function syframes10()  {

   
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes11);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes09);
      };

    let frame11;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame11 = loadImage(['./assets/frames-individual-11.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame11, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
  btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 7 /////////////////
function syframes11()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes12);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes10);
      };

    let frame11;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame11 = loadImage(['./assets/frames-individual-11.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame11, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
   btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}



////////////////////////////// 8 /////////////////
function syframes12()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes13);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes11);
      };

    let frame12;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame12 = loadImage(['./assets/frames-individual-12.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame12, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
 btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 9 /////////////////
function syframes13()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes14);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes12);
      };

    let frame13;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame13 = loadImage(['./assets/frames-individual-13.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame13, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };
    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 10 /////////////////
function syframes14()  {

   
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes15);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes13);
      };

    let frame14;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame14 = loadImage(['./assets/frames-individual-14.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame14, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
     btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 11 /////////////////
function syframes15()  {

   
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes16);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes14);
      };

    let frame15;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame15 = loadImage(['./assets/frames-individual-15.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame15, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
     btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 12 /////////////////
function syframes16()  {

   
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes17);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes15);
      };

    let frame16;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame16 = loadImage(['./assets/frames-individual-16.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame16, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
     btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 13 /////////////////
function syframes17()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes18);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes16);
      };

    let frame17;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame17 = loadImage(['./assets/frames-individual-17.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame17, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
       btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}


////////////////////////////// 14 /////////////////
function syframes18()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes19);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes17);
      };

    let frame18;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame18 = loadImage(['./assets/frames-individual-18.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame18, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
      btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 15 /////////////////
function syframes19()  {

   
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes20);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes18);
      };

    let frame19;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame19 = loadImage(['./assets/frames-individual-19.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame19, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
     btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 16 /////////////////
function syframes20()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes21);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes19);
      };

    let frame20;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame20 = loadImage(['./assets/frames-individual-20.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame20, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
       btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 17 /////////////////
function syframes21()  {

   
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes22);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes20);
      };

    let frame21;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame21 = loadImage(['./assets/frames-individual-21.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame21, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
      btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 18 /////////////////
function syframes22()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes23);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes21);
      };

    let frame22;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame22 = loadImage(['./assets/frames-individual-22.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame22, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
      btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 19 /////////////////
function syframes23()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes24);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes22);
      };

    let frame23;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame23 = loadImage(['./assets/frames-individual-23.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame23, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
       btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 20 /////////////////
function syframes23()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes24);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes22);
      };

    let frame23;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame23 = loadImage(['./assets/frames-individual-23.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame23, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
     btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };
    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 21 /////////////////
function syframes24()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes25);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes23);
      };

    let frame24;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame24 = loadImage(['./assets/frames-individual-24.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame24, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
      btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 22 /////////////////
function syframes25()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes26);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes24);
      };

    let frame26;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame26 = loadImage(['./assets/frames-individual-26.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame26, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
     btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 23 /////////////////
function syframes26()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes27);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes25);
      };

    let frame26;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame26 = loadImage(['./assets/frames-individual-26.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame26, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
     btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 24 /////////////////
function syframes27()  {

   
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes28);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes26);
      };

    let frame27;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame27 = loadImage(['./assets/frames-individual-27.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame27, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
      btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };
    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 25 /////////////////
function syframes28()  {

   
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes29);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes27);
      };

    let frame28;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame28 = loadImage(['./assets/frames-individual-28.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame28, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
      btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 26 /////////////////
function syframes29()  {

   
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes30);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes28);
      };

    let frame29;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame29 = loadImage(['./assets/frames-individual-29.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame29, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
      btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };
    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 27 /////////////////
function syframes30()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes31);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes29);
      };

    let frame30;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame30 = loadImage(['./assets/frames-individual-30.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame30, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
      btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };
    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 28 /////////////////
function syframes31()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes32);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes30);
      };

    let frame31;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame31 = loadImage(['./assets/frames-individual-31.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame31, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
     btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };
    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 29 /////////////////
function syframes32()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes33);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes31);
      };

    let frame32;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame32 = loadImage(['./assets/frames-individual-32.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame32, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
      btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };
    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 30 /////////////////
function syframes33()  {

  

    this.btnevent2 = () => {
  playhelpsound();
  this.sceneManager.showScene(syframes34);
       };

       this.btnevent3 = () => {
    playhelpsound();
    this.sceneManager.showScene(syframes32);
  };

    let frame33;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;


   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     
    

      
      frame33 = loadImage(['./assets/frames-individual-33.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame33, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();




       btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}


////////////////////////////// 31 /////////////////
function syframes34()  {

   
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes35);
       };

    this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes33);
        };
    

    let frame34;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

     
      frame34 = loadImage(['./assets/frames-individual-34.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame34, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
     btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };
    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 32 /////////////////
function syframes35()  {


    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes36);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes34);
  };
    let frame35;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;
 
   

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
      
  

      
      frame35 = loadImage(['./assets/frames-individual-35.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame35, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();

    btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}


////////////////////////////// 33 /////////////////
function syframes36()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes37);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes35);
      };

    let frame36;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame36 = loadImage(['./assets/frames-individual-36.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame36, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
     btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}


////////////////////////////// 34 /////////////////
function syframes37()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes38);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes36);
      };

    let frame37;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame37 = loadImage(['./assets/frames-individual-37.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame37, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
      btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 35 /////////////////
function syframes38()  {

    
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes39);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes37);
      };

    let frame37;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame37 = loadImage(['./assets/frames-individual-38.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame37, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
      btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 36 /////////////////
function syframes39()  {

   
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes40);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes38);
      };

    let frame39;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame39 = loadImage(['./assets/frames-individual-39.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame39, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
     btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

////////////////////////////// 37 /////////////////
function syframes40()  {

   
    this.btnevent2 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes09);
       };

      this.btnevent3 = () => {
        playhelpsound();
        this.sceneManager.showScene(syframes39);
      };

    let frame40;

    let sf = 1;
    let x = 0;
    let y = 0;

    let mx, my;

    const MIN_ZOOM = 1;
    const MAX_ZOOM = 5;
    const IMAGE_WIDTH = 720;
    const IMAGE_HEIGHT = 720;
    const CANVAS_WIDTH = 720;
    const CANVAS_HEIGHT = 720;

   

    // scene1.setup
    this.setup = function() {
      console.log("We are at the frame carousel");
     

      
      frame40 = loadImage(['./assets/frames-individual-40.png']);
      outputVolume(.25); 
 
  

      
    }

    this.enter = function()  {
        mouseIsPressed = false;
        console.log("We are entering frame carousel");
        
        textAlign(CENTER);
        textSize(30);
        noStroke();

        snd1.stop();
          
       
    }


    this.draw = function()
    {
  
      mx = mouseX;
      my = mouseY;
    background("black");

    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate(x, y);

      image(frame40, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

     if (mouseIsPressed && isMouseInsideCanvas()) {
      x += (mouseX - pmouseX) / sf;
      y += (mouseY - pmouseY) / sf;
     }

         let scaledWidth = IMAGE_WIDTH * sf;
    let scaledHeight = IMAGE_HEIGHT * sf;
    let minX = Math.min(0, CANVAS_WIDTH - scaledWidth);
    let minY = Math.min(0, CANVAS_HEIGHT - scaledHeight);
    let maxX = 0;
    let maxY = 0;

    x = constrain(x, minX, maxX);
    y = constrain(y, minY, maxY);

     resetMatrix();
      btnevent1 = checkButtonPressCircle("HELP",width/2+325,height-(60-20),25,color('#3560B2'),color('white'),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playhelpsound();
        this.sceneManager.showScene( help );
    }

    let btnevent2 = checkButtonPressR("NEXT FRAME",width/2+325,height-130,120,40,color('#3560B2'),color('white'),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
       
        this.btnevent2();
    }
   
    let btnevent3 = checkButtonPress("PREV. FRAME",width/2+175,height-60,120,40,color('#3560b2'),color('white'),color(250));
      if(btnevent3) {
        btnevent3 = false;
        this.btnevent3();
      }
    textAlign(LEFT);
    textSize(23/1.6);
    noStroke();
    fill('#3560b2');
    text("Click '<'to see the previous frame, \nClick '>' to see the next frame! ", 55, 25);
    


    };

    window.addEventListener("wheel", function(e){
      if(e.deltaY > 0) {
        sf *= 1.05;
     } else {
      sf *= .95;
    }
 sf = Math.max(sf, 1);
});
      this.mouseWheel = function(event) {
if(isMouseInsideCanvas() && event.delta < 0){
  sf = constrain(sf*1.05,MIN_ZOOM,MAX_ZOOM);
}

    }
    
    this.keyPressed = function() {
  if (key === 'r' || key === 'R') {
    sf = 1;
    x = 0;
    y = 0;
    console.log("View reset");
  }


      return false;
    };

}

