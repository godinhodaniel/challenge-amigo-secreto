# 🎁 Amigo Secreto

## 📌 Sobre o projeto
Este é um simples **sorteador de amigo secreto** desenvolvido em **HTML, CSS e JavaScript**. O usuário pode adicionar nomes à lista e, ao final, sortear aleatoriamente um nome entre os participantes.

---

## 🚀 Funcionalidades
✔️ Adicionar nomes à lista.  
✔️ Evitar nomes duplicados na lista.
✔️ Exibir a lista de participantes em tempo real.  
✔️ Sortear um nome aleatório.  
✔️ Exibir o resultado do sorteio na tela.  

---

## 🖥️ Demonstração
Caso queira visualizar o projeto rodando, basta acessar:  
🔗 [**https://challenge-amigo-secreto-beryl-xi.vercel.app**](#)



## 📂 Estrutura do Projeto
O projeto é composto pelos seguintes arquivos:
📁 amigo-secreto/ │-- 📄 index.html # Estrutura do site │-- 🎨 style.css # Estilos e layout │-- ⚡ app.js # Lógica do sorteio e lista de amigos │-- 📂 assets/ # Imagens e ícones do projeto

---

📝 Código Explicado
Abaixo, explicamos as principais funções do projeto:

📌 Adicionando Amigos à Lista
A função adicionarAmigo() é responsável por adicionar novos nomes à lista de amigos. Ela valida a entrada para garantir que o nome não esteja vazio ou duplicado.
```
// Função que adiciona um nome à lista de amigos
function adicionarAmigo() {
    const input = document.getElementById("amigo");  // Pega o campo de entrada
    const nome = input.value.trim();  // Remove espaços extras antes e depois do nome

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; // Se o nome for vazio, não adiciona e retorna
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return; // Se já foi adicionado, exibe um alerta e retorna
    }

    amigos.push(nome);  // Adiciona o nome ao array de amigos
    atualizarLista();  // Chama a função para atualizar a lista exibida na tela
    input.value = "";   // Limpa o campo de entrada após a adição
    input.focus();      // Foca novamente no campo de entrada
}
```

🎲 Sorteando o Amigo Secreto
A função sortearAmigo() sorteia um nome aleatório da lista de amigos e exibe o resultado na tela.

```
// Função que sorteia um amigo secreto aleatoriamente
function sortearAmigo() {
    // Verifica se a lista de amigos não está vazia
    if (amigos.length === 0) {
        alert("Não há amigos para sortear!");
        return; // Se não houver amigos, exibe um alerta e retorna
    }

    // Gera um índice aleatório baseado no tamanho da lista
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtém o nome do amigo sorteado usando o índice aleatório
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome sorteado na tela
    document.getElementById("resultado").innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
```
