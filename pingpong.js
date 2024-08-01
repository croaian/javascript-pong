let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
let raioBolinha = tamBolinha/2;
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

function setup(){
    createCanvas(1200,800);
}

function draw(){
    background(0,0,0); 
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    movimentaBolinha();
    bolinhaBorda();
    criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
    movimentaRaquete();
    colideRaquete();
}

function criaBolinha(xBolinha, yBolinha, tamBolinha) {
    fill ("red");
    circle (xBolinha,yBolinha,tamBolinha);
}

function movimentaBolinha() {
    
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;
}

function bolinhaBorda(){
    if (xBolinha > width || xBolinha < 0){
        xvelocidadeBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0){
        yvelocidadeBolinha *= -1;
    }
}

function criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete) {
    fill("blue");
    rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}

function movimentaRaquete() {

    if(keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
}

function colideRaquete(){
    if(xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){
        xvelocidadeBolinha *= -1;
    }
}