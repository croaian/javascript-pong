let xBolinha = 300;
let yBolinha = 300;
let tamBolinha = 35;
let xvelocidadeBolinha = 10;
let yvelocidadeBolinha = 3;
let xRaquete=400
let yRaquete=400
let alturaRaquete=500
let larguraRaquete=500

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

function criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete){
    fill("blue");
    Reflect(xRaquete, yRaquete, larguraRaquete, alturaRaquete)
}