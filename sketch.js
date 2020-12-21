var block;
var rand;

function setup() {

    createCanvas(350, 200);

    rand = random(1,7);

}

function draw() {

    background("yellow");

    text("The denner is number " + rand + " !!", 40, 100);

    drawSprites();
   
}