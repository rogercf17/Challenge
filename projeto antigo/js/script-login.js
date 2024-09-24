document.addEventListener('DOMContentLoaded', function() {
    const formRegistro = document.getElementById('register-form');
    if (formRegistro) {
        formRegistro.addEventListener('submit', function(evento){
            evento.preventDefault();
            const nomeUsuario = document.getElementById('register-nome-usuario').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('register-senha').value;
            const senhaCorfimada = document.getElementById('confirm-senha').value;

            if (senha !== senhaCorfimada) {
                alert('As senhas não são iguais!');
            }

            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const usuarioExistente = usuarios.some(usuario => usuario.nomeUsuario === nomeUsuario && usuario.email === email);

            if (usuarioExistente) {
                alert('Usuário já existe!');
            }else {
                usuarios.push({nomeUsuario, email, senha});
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                alert('Registro feito!');
                window.location.href = 'login.html';
            }
        });
    }

    const formLogin = document.getElementById('login-form');
    if (formLogin) {
        formLogin.addEventListener('submit', function(evento){
            evento.preventDefault();
            const nomeUsuario = document.getElementById('nome-usuario').value;
            const senha = document.getElementById('senha').value;

            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const usuarioValido = usuarios.find(usuario => usuario.nomeUsuario === nomeUsuario && usuario.senha === senha);

            if (usuarioValido) {
                alert('Login efetuado com sucesso!');
                window.location.href = 'index.html';
            }else {
                alert('Usuário ou senha incorretos!');
            }
        });
    }
});
