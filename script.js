let nome_filme = document.getElementById('nome_filme_id')
let roteiro = document.getElementById('roteiro_id')
let montagem = document.getElementById('montagem_id')
let atuacao = document.getElementById('atuacao_id')
let figurino = document.getElementById('figurino_id')
let direcao = document.getElementById('direcao_id')
let direcao_arte = document.getElementById('direcao_arte_id')
let fotografia = document.getElementById('fotografia_id')
let trama = document.getElementById('trama_id')
let cgi = document.getElementById('cgi_id')



function calcular_media() {
    let rot = roteiro.value; // Captura o valor do <select>

    if (rot === "") { // Verifica se o valor está vazio
        window.alert("Por favor, selecione uma nota válida!");
        return; // Sai da função para evitar processar valores inválidos
    }

    rot = Number(rot); // Converte para número depois de validar
    window.alert(rot); // Mostra o valor selecionado
}
