let grimStartPosition = 366;
let hellY = 10;

let grimX = 80;
let grimY = grimStartPosition;
let grimSpeed = 4;

var hit = false;
let chances = 3;

function grimBackToStart() {
    grimY = grimStartPosition;
}

function cantGoBack() {
    if (grimY > grimStartPosition) {
        grimBackToStart();
    }
}

function reachHell() {
    return grimY == hellY;
}

function showGrim() {
    image(grim, grimX, grimY, 27, 32);
}

function controlGrim() {
    if (keyIsDown(UP_ARROW)) {
        grimY -= grimSpeed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        grimY += grimSpeed;
    }
}

function collision() {
    for (let i = 0; i < enemies.length; i++) {
        hit = collideRectRect(
            enemies[i][0],
            enemies[i][1],
            enemies[i][3],
            enemies[i][4],
            grimX,
            grimY,
            27,
            32
        );
        if (hit) {
            if (chances >= 1) {
                chances--;
                grimBackToStart();
                playCollisionSoundFx();
                noLoop();
                if (chances != 0) {
                    enemyCrashBanner();
                    setTimeout(loop, 1500);
                }
                if (chances == 0) {
                    gameOverBanner();
                    playGameOverSong();
                }
            }
        }
    }
}

let soulCount = 3;
let stageComplete;

function score() {
    if (reachHell()) {
        decreaseSoulCount();
        grimBackToStart();
        playScoreSoundFx();
        noLoop();
        if (soulCount != 0) {
            soulDeliveredBanner();
            setTimeout(loop, 1500);
        }
        if (soulCount == 0) {
            victoryBanner();
            playVictorySong();
        }
    }
}

function decreaseSoulCount() {
    soulCount -= 1;
}

function playScoreSoundFx() {
    soulDelivered.play();
    soulDelivered.setVolume(0.3);
}

function playCollisionSoundFx() {
    die.play();
    die.setVolume(0.1);
}

function playGameOverSong() {
    stage1Song.stop();
    gameOverSong.play();
    gameOverSong.setVolume(0.1);
}

function playVictorySong() {
    stage1Song.stop();
    victorySong.loop();
    victorySong.setVolume(0.2);
}
