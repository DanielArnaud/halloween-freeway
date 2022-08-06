function soulsText() {
    glow(1, 1, 5, 0);
    fill(218, 225, 196);
    textFont(font2);
    textSize(10);
    stroke(0);
    strokeWeight(1);
    text("Souls Left:", 210, 25);
    text(soulCount, 280, 25);
}

function soulsBoard() {
    glow(20, 20, 10, 5);
    //rect(250-50, 10, 100, 20, 15)
    image(board, 250 - 50, -5, 100, 40);
}

function lifesDisplay() {
    glow(1, 1, 5, 0);
    fill(218, 225, 196);
    textFont(font2);
    textSize(10);
    stroke(0);
    strokeWeight(1);

    image(lifeIcon, 346, 13, 17, 17);

    text(chances, 355 + 22, 25);
    textSize(6);
    text("x", 347 + 22, 25);
}

function lifesBoard() {
    glow(20, 20, 10, 5);
    //rect(250-50, 10, 100, 20, 15)
    image(board2, 340, -5, 50, 40);
}

function gameOverBanner() {
    glow(15, 15, 10, 0);
    fill(255, 0, 0);
    textFont(font2);
    textSize(70);
    stroke(0);
    strokeWeight(6);
    text("Game Over", 50, 215);
}

function victoryBanner() {
    glow(15, 15, 10, 0);
    fill(255, 255, 0);
    textFont(font2);
    textSize(70);
    stroke(0);
    strokeWeight(6);
    text("You win!", 90, 215);

    textSize(15);
    text("The little Grim Reaper", 155, 250);
    text("has delivered all the ", 160, 275);
    text("souls at the Gates of Hell.", 140, 300);
}

function soulDeliveredBanner() {
    glow(15, 15, 10, 0);
    fill(255, 255, 0);
    textFont(font2);
    textSize(30);
    stroke(0);
    strokeWeight(6);
    text("Soul delivered!", 130, 205);
}

function enemyCrashBanner() {
    glow(15, 15, 10, 0);
    fill(255, 0, 0);
    textFont(font2);
    textSize(30);
    stroke(0);
    strokeWeight(6);
    text("A Monster stopped you!", 60, 205);
}
