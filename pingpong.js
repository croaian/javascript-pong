let xBolinha = 300;
let yBolinha = 300;
let tamBolinha = 35;
let raioBolinha= tamBolinha/2;
let xvelocidadeBolinha = 10;
let yvelocidadeBolinha = 3;
let xRaquete=5
let yRaquete=150
let alturaRaquete=10
let larguraRaquete=90

function setup(){
    createCanvas(1200,800);
}

function draw(){
    background(18,128,50); 
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    moveBolinha();
    Borda();
    criaRaquete(xRaquete, yRaquete, alturaRaquete, larguraRaquete);
    moveRaquete();
    colideRaquete();
    bolinhaBorda();
}

function criaBolinha(xBolinha, yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamBolinha);
    fill ("bleack")
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
    Rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete)
}

if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
}
if(KeyIsDown(DOWN_ARROW)){
    yRaquete +=10
}
{
    if(xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha + raioBolinha > yRaquete){
        xvelocidadeBolinha*= -1;
    }
}