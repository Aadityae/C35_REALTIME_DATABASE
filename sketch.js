var Hypnotic_ball,database,position

function setup(){
    createCanvas(500,500)
    database = firebase.database()
    console.log(database)

    Hypnotic_ball = createSprite(200,290,10,10)
    Hypnotic_ball.shapeColor = "red"
    var Hypnotic_ballposition = database.ref("ball/position")
    Hypnotic_ballposition.on("value",readPosition,showError)
}

function draw(){
    background("white")

    if(keyDown(LEFT_ARROW))
    {
        writePosition(-1,0)
    }

    else if(keyDown(RIGHT_ARROW))
    {
        writePosition(1,0)
    }

    else if(keyDown(UP_ARROW))
    {
        writePosition(0,-1)
    }

    else if(keyDown(DOWN_ARROW))
    {
        writePosition(0,1)
    }

    drawSprites()
}

function readPosition(data)
{
    position = data.val()
    Hypnotic_ball.x = position.x
    Hypnotic_ball.y = position.y
}

function writePosition(x,y)
{
    database.ref("ball/position").set({
        "x":position.x+x,
        "y":position.y+y
    })
}

function showError()
{
    console.log("error in writing data to the database")
}