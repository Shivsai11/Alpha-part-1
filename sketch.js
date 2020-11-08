var database, form, player, game, plr1, plr2, p1img, p2img;
var playerCount = 0;
var gameState = 0;
var bgimg, allPlayers, alphaimg, alpha;
function preload(){
    bgimg = loadImage("images/bg3.jpg");
    p1img = loadImage("images/p1.1.jpg");
    p2img = loadImage("images/p2.1.png");
    alphaimg = loadImage("images/alpha.png");
}

function setup(){
   createCanvas(displayWidth-100, displayHeight-30);

   database = firebase.database();
   game = new Game();
   game.getState();
   game.start();

   alpha = createSprite(700, 50, 20, 20);
   alpha.addImage(alphaimg);
   alpha.scale = 1.5;
}

function draw(){
    background(bgimg);
    //game.start();
    drawSprites();
}   

