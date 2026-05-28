
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let image1_up, image2_over;
let snd1, snd2;
let fontRegular;

let cnv;
let scans = {};


// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var ghosty;

function preload() {
    // sound should be loaded so its available for all places.
    snd1 = loadSound("assets/wind.mp3");
    snd2 = loadSound("assets/requestSent.mp3");
    snd3 = loadSound("assets/wood.mp3")

    fontRegular = loadFont('assets/Epilogue-VariableFont_wght.ttf')
    scans.frame09 = loadImage(['./assets/frames-individual-09.png']);
    scans.frame10 = loadImage(['./assets/frames-individual-10.png']);
    scans.frame11 = loadImage(['./assets/frames-individual-11.png']);
    scans.frame12 = loadImage(['./assets/frames-individual-12.png']);
    scans.frame13 = loadImage(['./assets/frames-individual-13.png']);
    scans.frame14 = loadImage(['./assets/frames-individual-14.png']);
    scans.frame15 = loadImage(['./assets/frames-individual-15.png']);
    scans.frame16 = loadImage(['./assets/frames-individual-16.png']);
    scans.frame17 = loadImage(['./assets/frames-individual-17.png']);
    scans.frame18 = loadImage(['./assets/frames-individual-18.png']);
    scans.frame19 = loadImage(['./assets/frames-individual-19.png']);
    scans.frame20 = loadImage(['./assets/frames-individual-20.png']);
    scans.frame21 = loadImage(['./assets/frames-individual-21.png']);
    scans.frame22 = loadImage(['./assets/frames-individual-22.png']);
    scans.frame23 = loadImage(['./assets/frames-individual-23.png']);
    scans.frame24 = loadImage(['./assets/frames-individual-24.png']);
    scans.frame25 = loadImage(['./assets/frames-individual-25.png']);
    scans.frame26 = loadImage(['./assets/frames-individual-26.png']);
    scans.frame27 = loadImage(['./assets/frames-individual-27.png']);
    scans.frame28 = loadImage(['./assets/frames-individual-28.png']);
    scans.frame29 = loadImage(['./assets/frames-individual-29.png']);
    scans.frame30 = loadImage(['./assets/frames-individual-30.png']);
    scans.frame31 = loadImage(['./assets/frames-individual-31.png']);
    scans.frame32 = loadImage(['./assets/frames-individual-32.png']);
    scans.frame33 = loadImage(['./assets/frames-individual-33.png']);
    scans.frame34 = loadImage(['./assets/frames-individual-34.png']);
    scans.frame35 = loadImage(['./assets/frames-individual-35.png']);
    scans.frame36 = loadImage(['./assets/frames-individual-36.png']);
    scans.frame37 = loadImage(['./assets/frames-individual-37.png']);
    scans.frame38 = loadImage(['./assets/frames-individual-38.png']);
    scans.frame39 = loadImage(['./assets/frames-individual-39.png']);
    scans.frame40 = loadImage(['./assets/frames-individual-40.png']);





    //video.hide();
    //video.loop();
}




function setup() {

    // let canvasDiv = document.getElementById('canvas-div')
    cnv = createCanvas(720, 720);


    centerCanvas();
    cnv.parent("canvas-div");
    //console.log(hell);
    mgr = new SceneManager();


    ghosty = createSprite(0, 0);
    ghosty.addAnimation("normal", "assets/ghost_spin0001.png", "assets/ghost_spin0003.png");  // first image, and last image
    ghosty.addAnimation("stand", "assets/ghost_standing0001.png", "assets/ghost_standing0007.png"); // first image, and last image
    // make the sprite invisible until you need it.
    ghosty.visible = false;

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene(splash);
    mgr.addScene(main);
    mgr.addScene(help);
    mgr.addScene(syframes09);
    mgr.addScene(syframes10);
    mgr.addScene(syframes11);
    mgr.addScene(syframes12);
    mgr.addScene(syframes13);
    mgr.addScene(syframes14);
    mgr.addScene(syframes15);
    mgr.addScene(syframes16);
    mgr.addScene(syframes17);
    mgr.addScene(syframes18);
    mgr.addScene(syframes19);
    mgr.addScene(syframes20);
    mgr.addScene(syframes21);
    mgr.addScene(syframes22);
    mgr.addScene(syframes23);
    mgr.addScene(syframes24);
    mgr.addScene(syframes25);
    mgr.addScene(syframes26);
    mgr.addScene(syframes27);
    mgr.addScene(syframes28);
    mgr.addScene(syframes29);
    mgr.addScene(syframes30);
    mgr.addScene(syframes31);
    mgr.addScene(syframes32);
    mgr.addScene(syframes33);
    mgr.addScene(syframes34);
    mgr.addScene(syframes35);
    mgr.addScene(syframes36);
    mgr.addScene(syframes37);
    mgr.addScene(syframes38);
    mgr.addScene(syframes39);
    mgr.addScene(syframes40);
    mgr.showNextScene();

}

function windowResized() {
    centerCanvas();

}


function centerCanvas() {

    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);

}


// function responsiveScale() {
//     cnv.style('height', '80vh');
//     cnv.style('width', 'auto');
// }


function draw() {

    // passthe current draw function into the SceneManager
    mgr.draw();

}

function mousePressed() {
    // pass the mousePressed message into the SceneManager
    mgr.mousePressed();
}

function keyPressed() {
    const scene = mgr.scene?.oScene;
    // You can optionaly handle the key press at global level...
    switch (key) {
        case '1':
            mgr.showScene(splash);
            break;
        case '2':
            mgr.showScene(main);
            break;
        case '3':
            mgr.showScene(help);
            break;
        // case '4':
        //  mgr.showNextScene();
        //     break;
        case 'h':
            mgr.showScene(help);
            break;


        case '.':
            console.log("Scene object:", mgr.scene);
            console.log("btnevent2 exists:", typeof scene?.btnevent2 === 'function');
            if (scene && typeof scene.btnevent2 === 'function') {
                scene.btnevent2();
            }
            break;
        case ',':
            console.log("Scene object:", mgr.scene);
            console.log("btnevent3 exists:", typeof scene?.btnevent3 === 'function');
            if (scene && typeof scene.btnevent3 === 'function') {
                scene.btnevent3();
            }
            break;
    }

    // ... then dispatch via the SceneManager.
    if (scene && typeof scene.keyPressed === 'function') {
        scene.keyPressed();
    }
}

function showScene(sceneFn) {
    previousSceneName = currentSceneName;
    currentSceneName = sceneFn.name;
    mgr.showScene(sceneFn);
}



function mouseWheel(event) {
    if (mgr.scene && typeof mgr.scene.mouseWheel === "function") {
        return mgr.scene.mouseWheel(event);
    }
}
