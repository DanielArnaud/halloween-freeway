//variáveis da Bolinha
let xBolinha = 300; //posição inicial no eixo x (horirontal)
let yBolinha = 200; //posição inicial no eixo y (vertical)
let diametro = 25; //indica o tamanho (em pixels) da bolinha
let raio = diametro / 2;

//indicam a velocidade da bolinha (quanto maior, mais rápido)
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 155;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//variaveis do opnente
let xRaqueteOponente = 585; // ponto superior esquerdo do retângulo. Tem que ser =  Largura do Canvas - (a distancia desejada + tamanho da raquete) 600 - (5 + 10)
let yRaqueteOponente = 155;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    fundoJogo = loadImage("fundo.png");
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("hit-board.wav");
}

function setup() {
    createCanvas(600, 400);
    trilha.loop();
    trilha.setVolume(0.1);
}

let colidiu = false;

let meusPontos = 0;
let pontosDoOponente = 0;

function draw() {
    background(fundoJogo);

    // Criação e movimento da bolinha
    mostraBolinha();
    movimentaBolinha();

    // Colisão da bolinha com as bordas do cenário
    verificaColisaoBorda();

    //Funções da Raquete do Player 1
    mostraRaquete(xRaquete, yRaquete);
    colisaoMinhaRaqueteBiblioteca(xRaquete, yRaquete, raquetada); //colisão da bolinha com a raquete
    moveRaquete();

    //Funções da Raquete do Oponente
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    colisaoMinhaRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente, raquetada);
    moveRaqueteOponente();

    incluiPlacar();
    marcaPonto();

    //verificaColisaoRaquete()
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    //Essas constantes representam as bordas do círculo. Em qualquer posição as bordas serão a posição atual + ou - o raio
    const bordaDireita = xBolinha + raio;
    const bordaEsquerda = xBolinha - raio;
    const bordaInferior = yBolinha + raio;
    const bordaSuperior = yBolinha - raio;

    if (bordaDireita > width || bordaEsquerda < 0) {
        velocidadeXBolinha *= -1;
    }

    if (bordaInferior > height || bordaSuperior < 0) {
        velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x, y) {
    rect(x, y, comprimentoRaquete, alturaRaquete);
}

function moveRaquete() {
    if (keyIsDown(87)) {
        yRaquete -= 8;
    }
    if (keyIsDown(83)) {
        yRaquete += 8;
    }
}

function moveRaqueteOponente() {
    if (keyIsDown(UP_ARROW)) {
        yRaqueteOponente -= 8;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaqueteOponente += 8;
    }
}

function verificaColisaoRaquete() {
    //Essas constantes representam as bordas do círculo. Em qualquer posição as bordas serão a posição atual + ou - o raio
    const bordaDireita = xBolinha + raio;
    const bordaEsquerdaBolinha = xBolinha - raio;
    const bordaInferiorBolinha = yBolinha + raio;
    const bordaSuperiorBolinha = yBolinha - raio;
    //Estas variaveis se referem às medidas da raquete em relacão ao cenário.
    let linhaSuperiorRaquete = yRaquete;
    let linhaInferiorRaquete = yRaquete + alturaRaquete;
    let bordaRaquete = xRaquete + comprimentoRaquete;

    if (
        bordaEsquerdaBolinha < bordaRaquete &&
        bordaSuperiorBolinha < linhaInferiorRaquete &&
        bordaInferiorBolinha > linhaSuperiorRaquete
    ) {
        velocidadeXBolinha *= -1;
    }
}

function colisaoMinhaRaqueteBiblioteca(x, y, z) {
    colidiu = collideRectCircle(
        x,
        y,
        comprimentoRaquete,
        alturaRaquete,
        xBolinha,
        yBolinha,
        diametro
    );

    if (colidiu) {
        velocidadeXBolinha *= -1;
        z.play();
    }
}

function incluiPlacar() {
    fill(color(0, 139, 139));
    rect(125, 6, 50, 25, 10); //placar player 1
    rect(425, 6, 50, 25, 10); //placar oponente

    textAlign(CENTER);
    fill(255);
    textSize(20);
    textStyle(BOLD);
    text(meusPontos, 150, 26);
    text(pontosDoOponente, 450, 26);
}

function marcaPonto() {
    if (xBolinha + raio > width - 1) {
        meusPontos += 1;
        ponto.play();
        ponto.setVolume(0.2);
    }
    if (xBolinha - raio < 0 + 1) {
        pontosDoOponente += 1;
        ponto.play();
        ponto.setVolume(0.2);
    }
}
