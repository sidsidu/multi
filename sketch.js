var ball;
var data 
var pos;

function setup(){
    data = firebase.database();
    console.log(data)
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition = data.ref('ball/position')
    ballPosition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(pos !== undefined){
    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }

    drawSprites();
    }
}

function writePosition(x,y){
    data.ref('ball/position').set({
        'x':pos.x+x,
        'y':pos.y+y
    })
}
function readPosition(data){
    pos = data.val()
    console.log(pos.x)
    ball.x=pos.x
    ball.y = pos.y

}
function showError(){
    console.log("error")
}