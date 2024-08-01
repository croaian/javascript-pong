let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
let xvelocidadeBolinha = 10;
let yvelocidadeBolinha = 6;
let xRaquete=20
let yRaquete=75
let alturaRaquete=200
let larguraRaquete=200

function setup(){
    createCanvas(1200,800);
}

function draw(){
    background(18,128,50); 
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    moveBolinha();
    Borda();
}

function criaBolinha(xBolinha, yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamBolinha);
}

function moveBolinha(){
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;
}

function Borda(){
    if (xBolinha > width || xBolinha < 0){
        xvelocidadeBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0){
        yvelocidadeBolinha *= -1;
    }
}

function criaRaquete(yRaquete, xRaquete, alturaRaquete, larguraRaquete){
    fill("blue")
    Reflect(yRaquete, xRaquete, alturaRaquete, larguraRaquete)
}