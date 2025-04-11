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

        //Para baixo-valores do Modal//
        let labels = document.querySelectorAll('#selects_container2 label');
        let valores_label = []; // Array para armazenar todos os valores dos labels
    
        labels.forEach(label => {
            valores_label.push(label.innerText); // Armazena cada texto de label no array
        });
        
        
        let cate_display = document.getElementById('categoria')
        let nota_display = document.getElementById('nota')
        cate_display.innerHTML = ''
        nota_display.innerHTML = ''
        let selects_modal = document.querySelectorAll('#selects_container2 select'); // Captura todos os selects
        let valores_modal = []; // Inicializa a soma
        selects_modal.forEach(select => { // Itera sobre cada select
            valores_modal.push(Number(select.value)); // Converte o valor para número
        })
        
        valores_label.forEach(valor_label => {
            cate_display.innerHTML += `<p>${valor_label}</p>`; // Adiciona cada valor em um novo parágrafo
        });
        valores_modal.forEach(valor_modal => {
            if(valor_modal !== 0){
            nota_display.innerHTML += `<p>${valor_modal}</p>`;}
            else{
                nota_display.innerHTML += `<p style="color: #aa0000;">X</p>`
            }
        });
        let filme_m = document.getElementById('filme_modal')
        let nota_m = document.getElementById('nota_modal')
        filme_m.innerHTML = `<h2>${filme}</h2>`
        nota_m.innerHTML = `<h2>Nota: ${media.toFixed(1)}</h2>`
}

function visualizar_pequeno(){
    let mod = document.getElementById('Modal')
    if(mod.style.display === "none" || mod.style.display === ""){
    mod.style.display = "flex"
}else{
    mod.style.display = "none"
}
}

