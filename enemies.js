let enemies = [
    //[x position, y position, speed, x size, y size]
    [600, 45, 5, 45, 38], //ghost 0
    [600, 100, 2.5, 36, 41], //pumpkin 1
    [600, 155, 3.8, 50, 40], //bat 2
    [600, 210, 4.75, 50, 40], //bat 3
    [600, 265, 3.3, 36, 41], //pumpkin 4
    [600, 320, 4, 45, 38], //ghost 5
    //IDEIA PARA NIVEL 2: BOTAR 2 INIMIGOS POR FAIXA
];

function showEnemies() {
    let j = 0;
    for (let i = 0; i < enemies.length; i++) {
        image(
            enemySprite[i],
            enemies[i][0],
            enemies[i][1],
            enemies[i][3],
            enemies[i][4]
        );
    }
}

function moveEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        enemies[i][0] -= enemies[i][2];
        if (enemies[i][0] < -50) {
            enemies[i][0] = 600;
        }
    }
}
