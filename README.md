# 🎁 Amigo Secreto

## 📌 Sobre o projeto
Este é um simples **sorteador de amigo secreto** desenvolvido em **HTML, CSS e JavaScript**. O usuário pode adicionar nomes à lista e, ao final, sortear aleatoriamente um nome entre os participantes.

---

## 🚀 Funcionalidades
✔️ Adicionar nomes à lista.  
✔️ Evitar nomes duplicados na lista.  
✔️ Remover espaços em branco nos nomes inseridos.  
✔️ Exibir a lista de participantes em tempo real.  
✔️ Sortear um nome aleatório.  
✔️ Exibir o resultado do sorteio na tela.  

---

## 🖥️ Demonstração
Caso queira visualizar o projeto rodando, basta acessar:  
🔗 [**https://github.com/godinhodaniel/challenge-amigo-secreto**](#) *(adicione o link do GitHub Pages, caso publique o projeto)*  



## 📂 Estrutura do Projeto
O projeto é composto pelos seguintes arquivos:
📁 amigo-secreto/ │-- 📄 index.html # Estrutura do site │-- 🎨 style.css # Estilos e layout │-- ⚡ app.js # Lógica do sorteio e lista de amigos │-- 📂 assets/ # Imagens e ícones do projeto

---

📝 Código Explicado
📌 Adicionando amigos à lista
A função adicionarAmigo() permite que o usuário insira nomes na lista, garantindo que:
✔️ O campo de entrada não esteja vazio.
✔️ Nomes duplicados não sejam adicionados.
✔️ O nome seja atualizado na interface.
✔️ O campo seja limpo automaticamente.

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}
🎲 Sorteando um amigo aleatório
A função sortearAmigo() seleciona um nome aleatório da lista usando Math.random() e Math.floor().

js
Copiar
Editar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos para sortear!");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
