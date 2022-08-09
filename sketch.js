function setup() {
    createCanvas(500 * 2.1, 400 * 2.1);
    getAudioContext().resume()
    stage1Song.loop();
    stage1Song.setVolume(0.1);
}

function draw() {
    scale(2.1, 2.1);
    background(backg);

    glow(0, 0, 10, 200);

    showGrim();
    controlGrim();
    cantGoBack();

    showEnemies();

    moveEnemies();
    collision();
    score();
    //lifes()

    soulsBoard();
    soulsText();

    lifesBoard();
    lifesDisplay();
    //gameOverHud()
}

function glow(shadowX, shadowY, shadowBlur, shadowColor) {
    drawingContext.shadowOffsetX = shadowX;
    drawingContext.shadowOffsetY = shadowY;
    drawingContext.shadowBlur = shadowBlur;
    drawingContext.shadowColor = color(shadowColor);
}

// function stage1() {
//   if (stageComplete) {
//     noLoop()
//   }

// }

/*
--->This game is intend to have 2 stages. The first one easier, and the second one a hell of a nightmare to complete.
To reach the second level (stage) the player has to make the little Grim Reaper deliver 5 souls at the Gate's of Hell.

The plans for the next features are:
---> create the main menu 
---> main menu's screen is going to be the .gif (put the song to play)
---> over the gif there must be a button (a fancy one, perharpsa image made by myself). Once this button is pushed, the game will start. (loop()) and the
 gif and the button must be removed (remove()?) and the song must to be stopped as well
---> So... the game itself does not start when the page is loaded (noLoop()?) only when the button is pressed.
---> The player starts whith 3 "lifes" and get an extra after complete the first stage 
Once the player gets out of "lifes": GAME OVER, ADIÓS, AU REVOIR. 
---> Stop (noLoop()?) the game after the LIFE COUNT variable gets to zero. 
---> Is there any possibility of changing the "Loading..." screen of a p5.js app? If so, let's make a nice loading screen.

==== make the life counter and make it decrease after a collision
==== load the sound tracks and effects
==== make a game over condition
==== make a game over screen
==== make the game only start when we press a button
==== insert this button in a home screen (the gif)


=============make a constraint 

*/
