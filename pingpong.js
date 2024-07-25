// aqui eu vou criar a bolinha
let xBolinha=300;
let yBolinha=200;
let tamBolinha=55;
let xvelBolinha=6
let yvelBolinha=6

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //aqui vou por a cor da minha "mesa"
    //a cor da mesa é em rgb
    background(105,0,231);
    criaBolinha(xBolinha,yBolinha,tamBolinha)
    moveBolinha()
}

function criaBolinha(xBolinha,yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamBolinha);
}

//função move bolinha
function moveBolinha(){
    xBolinha=xvelBolinha+xBolinha
    yBolinha=yvelBolinha+yBolinha
}