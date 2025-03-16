// Array que vai armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo() {
    // Captura o campo de entrada onde o usuário digita o nome
    const input = document.getElementById("amigo");
    // Pega o valor digitado e remove os espaços extras com trim
    const nome = input.value.trim();

    // Validação: se o campo estiver vazio, mostra um alerta e interrompe a execução
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    // Adiciona o nome válido ao array de amigos usando o método push
    amigos.push(nome);

    // Atualiza a lista exibida na tela com o novo nome
    atualizarLista();

    // Limpa o campo de entrada para facilitar a inserção de outro nome
    input.value = "";
    // Retorna o foco para o campo de entrada
    input.focus();
}

// Função para atualizar a lista HTML com os nomes dos amigos
function atualizarLista() {
    // Obtém o elemento da lista (ul ou outro) onde os nomes serão exibidos
    const lista = document.getElementById("listaAmigos");

    // Limpa a lista atual para evitar duplicados
    lista.innerHTML = "";

    // Percorre o array 'amigos' usando um loop for
    for (let i = 0; i < amigos.length; i++) {
        // Cria um novo elemento <li> para cada nome
        const li = document.createElement("li");
        // Insere o nome do amigo no elemento <li>
        li.textContent = amigos[i];
        // Adiciona o <li> à lista HTML
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Valida se o array 'amigos' possui pelo menos um nome
    if (amigos.length === 0) {
        alert("Não há amigos para sortear!");
        return; // Encerra a função caso o array esteja vazio
    }

    // Gera um índice aleatório: Math.random() retorna um número entre 0 e 1,
    // multiplicamos pelo tamanho do array e usamos Math.floor() para arredondar para baixo.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado utilizando o índice gerado
    const amigoSorteado = amigos[indiceAleatorio];

    // Seleciona o elemento HTML onde o resultado será exibido
    const elementoResultado = document.getElementById("resultado");

    // Atualiza o conteúdo do elemento com o nome sorteado
    elementoResultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}