let backg;
let grim;
let pumpkin;
let bat;
let ghost;
let font;
let font2;
let main;
let board;
let board2;
let lifeIcon;

//songs
let stage1Song;
let mainMenuSong;
let gameOverSong;
let victorySong;

//soundfx
let soulDelivered;
let die;

function preload() {
    //backgound image
    backg = loadImage("material/fundo.png");

    //grim and enemies images and array
    grim = loadImage("material/ator.png");
    pumpkin = loadImage("material/pumpkin.png");
    bat = loadImage("material/bat.png");
    ghost = loadImage("material/ghost.png");

    enemySprite = [ghost, pumpkin, bat, bat, pumpkin, ghost];

    //hud images
    lifeIcon = loadImage("material/lifeIcon.png");
    board = loadImage("material/board.png");
    board2 = loadImage("material/board.png");

    //songs
    stage1Song = loadSound("material/sounds/stage1.mp3");
    mainMenuSong = loadSound("material/sounds/mainMenu.mp3");
    gameOverSong = loadSound("material/sounds/GameOver.mp3");
    victorySong = loadSound("material/sounds/victory.mp3");

    //sound fx
    soulDelivered = loadSound("material/sounds/soulDelivered.mp3");
    die = loadSound("material/sounds/Collide.mp3");

    font = loadFont("material/Comic_CAT.otf");
    font2 = loadFont("material/PiScoffinsandghosts.otf");
}
