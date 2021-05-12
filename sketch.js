var bgImg;
var catImg1, catImg2, catImg3;
var mouseImg1, mouseImg2, mouseImg3;

function preload()
{
    //load the images here
    bgImg = loadAnimation("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png, images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png, images/mouse3.png");
    catImg3 = loadImage("images/mouse4.png");
    mouseImg3 = loadImage("images/cat4.png");
}

function setup()
{
    createCanvas(1000,800);

    //creating sprites
    cat = createSprite(500, 400);
    cat = addImage(catImg1);
    mouse = createSprite(700, 400); 
    mouse = addImage(mouseImg1);
}

function draw() 
{
    background(bgImg);

    if(touching(cat, mouse) === true)
    {
        mouse.addImage(mouseImg3);
    }

    keyPressed();

    drawSprites();
}

    
function keyPressed()
{   
    if(keyCode === RIGHT_ARROW)
    {
        mouse.addAnimation("mouseRunning", mouseImg2);  
        mouse.changeAnimation("mouseRunnning");  
        mouse.frameDelay = 25;  
    }

    if(keyCode === LEFT_ARROW)
    {
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        cat.frameDelay = 25;
        cat.x = cat.x - 10;
    }
}   

function touching(object1, object2)
{
    if(object1.x - object2.x < object1.width/2 + object2.width/2
      &&object2.x - object1.x < object1.width/2 + object2.width/2) 
    {
        return true;
    }
 
    if(object1.y - object2.y < object1.height/2 + object2.height/2
      &&object2.y - object1.y < object1.height/2 + object2.height/2)
    {
        return true;
    }  
    else{return false;}
}
