/*
let canvas = document.getElementById("snake");
let contexto = canvas.getContext("2d");
document.addEventListener("keydown", keyPush);
setInterval(game, 85);

const vel = 1;

var vx = vy = 0;
var px = 10; // cabeça
var py = 15; // calda
var tp = 30;
var qp = 20; //quantidade de peças
var ax = ay = 15;

var trail = [];
tail = [5] // tamanho da cobrinha


function game() {
    px += vx;
    py += vy;

    contexto.fillStyle = "black";
    contexto.fillRect(0, 0, snake.width, snake.height);

    contexto.fillStyle = "red";
    contexto.fillRect(ax * tp, ay*tp, tp, tp);

    contexto.fillStyle = "gray";
    for (var i = 0; i < trail.length; i++) {
        contexto.fillRect(trail[i]. x*tp, trail[i]. y*tp)
    }
}
*/

let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 = box,
    y: 8 = box
}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarSnake() {
    for(i=0; 1 < snake.length; i++) {
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBB();
