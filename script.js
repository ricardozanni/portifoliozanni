document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Pega os valores dos campos, removendo espaços extras
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    
    // Seleciona as áreas de erro e mensagem de sucesso
    let erroNome = document.getElementById("erroNome");
    let erroEmail = document.getElementById("erroEmail");
    let erroSenha = document.getElementById("erroSenha");
    let mensagemSucesso = document.getElementById("mensagemSucesso");

    // Limpa mensagens anteriores
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroSenha.textContent = "";
    mensagemSucesso.textContent = "";

    let valido = true; // Flag para indicar se todos os campos são válidos

    // Validação do nome
    if (nome === "") {
        erroNome.textContent = "Nome é obrigatório!";
        valido = false;
    }

    // Validação do e-mail com regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        erroEmail.textContent = "E-mail inválido!";
        valido = false;
    }

    // Validação do tamanho da senha
    if (senha.length < 6) {
        erroSenha.textContent = "A senha deve ter no mínimo 6 caracteres!";
        valido = false;
    }

    // Se tudo estiver válido, salva no localStorage
    if (valido) {
        let usuario = { nome, email, senha }; // Cria objeto com os dados
        localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario)); // Salva no navegador

        mensagemSucesso.textContent = "Cadastro realizado com sucesso!";
        this.reset(); // Limpa o formulário
        setTimeout(() => {
            window.location.href = "login.html"; // Redireciona após 2 segundos
        }, 2000);
    }
});

