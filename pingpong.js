// aqui eu vou criar a bolinha
let xBolinha=300;
let yBolinha=200;
let tamBolinha=25;
function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(1200,800);
}
function draw(){
    //aqui vou por a cor da minha "mesa"
    //a cor da mesa é em rgb
    background(75,0,131);
    criaBolinha(xBolinha,yBolinha,tamBolinha)
}
function criaBolinha(xBolinha,yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamBolinha);
}