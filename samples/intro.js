// declarando variáveis
let canvas, trg;
let color = '#9f0acc';
let firstTime = true;

function setup() {
  // cria uma pagina/painel
  canvas = createCanvas(400, 400);
    
  // editando propriedades do painel
  canvas.mouseOver(changeColor);
  canvas.mouseOut(returnColor);
  
  trg = loadImage('family_chooser_tecnica_m.png');
}

function draw() {
  background(color);
  
  // criando um triangulo
  trg = triangle(10, 10, 30, 40, mouseX, mouseY);

  if ( firstTime === true ) {
    // print no terminal
    console.log(trg);
    firstTime = false;
  }
  
}

function changeColor() {
  color = '#cc0a88';
}

function returnColor() {
  color = '#9f0acc'
}