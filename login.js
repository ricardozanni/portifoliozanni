document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    let erroEmail = document.getElementById("erroEmail");
    let erroSenha = document.getElementById("erroSenha");
    let mensagemErro = document.getElementById("mensagemErro");
    let mensagemSucesso = document.getElementById("mensagemSucesso");

    erroEmail.textContent = "";
    erroSenha.textContent = "";
    mensagemErro.textContent = "";
    mensagemSucesso.textContent = "";

    let usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado"));

    if (!usuarioCadastrado) {
        mensagemErro.textContent = "Nenhum usuário cadastrado!";
        return;
    }

    if (email !== usuarioCadastrado.email) {
        erroEmail.textContent = "E-mail não encontrado!";
        return;
    }

    if (senha !== usuarioCadastrado.senha) {
        erroSenha.textContent = "Senha incorreta!";
        return;
    }

    mensagemSucesso.textContent = "Login efetuado com sucesso!";
        setTimeout(() => {
            window.location.href = "principal.html"; 
        }, 2000);
});