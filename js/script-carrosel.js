// Carrosel dos principais pilotos
'use strict'
const slideWrapper = document.querySelector('[data-slide="wrapper"]');
const slideList = document.querySelector('[data-slide="list"]');
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]');
const controlButtons = document.querySelector('[data-slide="control-button"]');
const slideItems = document.querySelectorAll('[data-slide="item"]');

function mouseClicado(evento) {
    const slideItem = evento.currentTarget;
    console.log(evento.clientX);
    console.log('Apertei o botao do mouse');
    slideItem.addEventListener('mousemove', aoMoverMouse);
}

function aoMoverMouse(evento) {
    console.log('Movimentei o mouse');
}

function mouseSolto(evento) {
    const slideItem = evento.currentTarget;
    slideItem.removeEventListener('mousemove', aoMoverMouse);
    console.log('Soltei o botao do mouse');
}

slideItems.forEach(function(slideItem, index) {
    slideItem.addEventListener('dragstart', function(infosDoEvento) {
        infosDoEvento.preventDefault();
    });
    slideItem.addEventListener('mousedown', mouseClicado);
    slideItem.addEventListener('mouseup', mouseSolto);
});