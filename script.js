function calcular_media() {
    let selects = document.querySelectorAll('#selects_container2 select'); // Captura todos os selects
    let soma = 0; // Inicializa a soma
    selects.forEach(select => { // Itera sobre cada select
        let valor = Number(select.value); // Converte o valor para número
        if (!isNaN(valor)) { // Verifica se o valor é um número válido
            soma += valor; // Adiciona o valor à soma total
        }
    });
        let n_valores = 0; // Inicializa o contador
        selects.forEach(select => {
            if (select.value !== "") { // Verifica se o valor não está vazio
                n_valores++; // Incrementa o contador
            }
        });
        
        let media = soma / n_valores
        let nome_filme = document.getElementById('nome_filme_id')
        let filme = nome_filme.value
        if(n_valores > 0){
            let pontos_display = document.getElementById('display_pontuacao')
            pontos_display.innerHTML = `<p><span id="span1">Filme:${filme}<br></span>Nota: ${media.toFixed(1)}</p>`
        }else{
            window.alert(`Coloque algum valor nas caixas para gerar a nota.`);
        }
}
