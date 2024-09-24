// Menu vertical dropdown
const btnMenu =  document.querySelector('.menu-lateral-btn');
const btnFecharMenu = document.querySelector('.btn-fechar');

btnMenu.addEventListener('click', function(infosDoEvento) {
    infosDoEvento.preventDefault();
    document.querySelector('.menu-lateral').classList.add('ativo');
    btnMenu.style.visibility = 'hidden';
});
btnFecharMenu.addEventListener('click', function() {
    document.querySelector('.menu-lateral').classList.remove('ativo');
    btnMenu.style.visibility = 'visible';
});

// Menu lateral com scroll
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.menu-lista-lateral a');
    
    links.forEach(link => {
        link.addEventListener('click', function(infosDoEvento) {
            infosDoEvento.preventDefault();
            const id = this.getAttribute('href').substring(1);
            const elemento = document.getElementById(id);
            const alturaCabecalho = document.getElementById('cabecalho').offsetHeight;
            const posicao = elemento.offsetTop;
            const posicaoOffset = posicao - alturaCabecalho - 100;

            window.scrollTo({
                top: posicaoOffset,
                behavior: 'smooth'
            });
        });
    });
});