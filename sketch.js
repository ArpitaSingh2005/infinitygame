var flapy , flapy_running





function preload() {
    flapy_running.loadAnimation("flapybird.jpg","flapybird2.jpg","flapybird3.jpg","flapybird4.jpg")
    


}

function setup() {
    createCanvas(600, 200)
    flapy = createSprite(50, 160, 20, 50)
    flapy=addAnimation("running",flapy_runing)
flapy. scale=0.5
flapy.x=0.5
}

function draw() {
    background("white")

if (keyDown("space"))
{
    flapy.velocityY=-8.9
}
flapy.velocityY=flapy.velocityY+0.5
 
flapy. collide(ground)
    drawSprite()
}