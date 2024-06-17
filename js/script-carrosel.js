'use strict'
const slideWrapper = document.querySelector('[data-slide="wrapper"]');
const slideList = document.querySelector('[data-slide="list"]');
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]');
const controlButtons = document.querySelectorAll('[data-slide="control-button"]');
const slideItems = document.querySelectorAll('[data-slide="item"]');

const state = {
    pontoInicial: 0,
    posicaoSalva: 0,
    currentPoint: 0,
    movimento: 0,
    indexSlideAtual: 0
};

function translateSlide(posicao) {
    state.posicaoSalva = posicao;
    slideList.style.transform = `translateX(${posicao}px)`;   
}

function mostrarSlide({ index }) {
    if (index < 0) {
        state.indexSlideAtual = slideItems.length - 1;
    } else if (index >= slideItems.length) {
        state.indexSlideAtual = 0;
    } else {
        state.indexSlideAtual = index;
    }
    const slideItem = slideItems[state.indexSlideAtual];
    const slideWidth = slideItem.clientWidth;
    const janelaWidth = document.body.clientWidth;
    const margin = (janelaWidth - slideWidth) / 2;
    const posicao = margin - (state.indexSlideAtual * slideWidth);
    translateSlide(posicao);
    atualizarControle();
}

function atualizarControle() {
    controlButtons.forEach((button, index) => {
        button.classList.toggle('active', index === state.indexSlideAtual);
    });
}

function proximoSlide() {
    mostrarSlide({ index: state.indexSlideAtual + 1 });
}

function slideAnterior() {
    mostrarSlide({ index: state.indexSlideAtual - 1 });
}

function mouseClicado(evento, index) {
    const slideItem = evento.currentTarget;
    state.pontoInicial = evento.clientX;
    state.currentPoint = evento.clientX - state.posicaoSalva;
    state.indexSlideAtual = index;
    slideItem.addEventListener('mousemove', aoMoverMouse);
}

function aoMoverMouse(evento) {
    state.movimento = evento.clientX - state.pontoInicial;
    const posicao = evento.clientX - state.currentPoint;
    translateSlide(posicao);
}

function mouseSolto(evento) {
    const slideItem = evento.currentTarget;
    const slideWidth = slideItem.clientWidth;
    if (state.movimento < -150) {
        proximoSlide();
    } else if (state.movimento > 150) {
        slideAnterior();
    } else {
        mostrarSlide({ index: state.indexSlideAtual });
    }
    slideItem.removeEventListener('mousemove', aoMoverMouse);
}

slideItems.forEach(function(slideItem, index) {
    slideItem.addEventListener('dragstart', function(infosDoEvento) {
        infosDoEvento.preventDefault();
    });
    slideItem.addEventListener('mousedown', function(evento) {
        mouseClicado(evento, index);
    });
    slideItem.addEventListener('mouseup', mouseSolto);
});

controlButtons.forEach((button, index) => {
    button.addEventListener('click', () => mostrarSlide({ index }));
});

mostrarSlide({ index: 0 });