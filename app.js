// Botão de sortear;
// Pegando os valores ou informações digitados pelo usuario, usando a função document.getElementById();
// Utilizar a função parseInt, para converter um valor do tipo String para um número inteiro;
function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    // Fazendo a proteção *De* -> *Ate* / *Return* pausa a leitrura do código
    if (de >= ate) {
      alert(`Número ${de} deve ser inferior ao número ${ate}. Verifique!`);
      return;
    }
    
  // Fazendo a proteção da *Quantidade* de números entre *De* -> *Ate* / *Return* pausa a leitrura do código
    if (quantidade > (ate - de + 1)) {
      alert(`Número ${quantidade} deve ser menor ou igual ao intervalo informado no número ${de} até o número ${ate}. Verifique!`);
      return;
    }
    
    // Criando uma variavel do tipo array e Colocando os numeros sorteados dentro da array
    let sorteados = [];
    let numeros;
    // Fazer uma estrutura de repetição utilizando for para gerar números aleatórios no sorteador;
    for (let i = 0; i < quantidade; i++) {
        numeros = gerarNumeroAleatorio(de, ate);

        while (sorteados.includes(numeros)) {
            numeros = gerarNumeroAleatorio(de, ate);
        }
        // Adicionar alguma coisa a uma array com o método push
        sorteados.push(numeros);
    }
    
    // Exibindo a array para o usuario 
    // Modificar o código HTML, inserindo algo, via propriedade innerHTML.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotao();
}

// Criando uma função para abilitar e desabilitar o botao de reiniciar;
function alterarStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');
  // Acessar a lista de classes, via propriedade classList;
  // Verificar se um elemento da página possui uma determinada classe CSS, via função classList.contains();
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");    
  }
}

// Criando função para gerar número aleatótio *De* -> *Ate*
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Criando botão reiniciar / Limpando todos os campos / Alterando status do botão
function reiniciar() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}