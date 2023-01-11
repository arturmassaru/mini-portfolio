/* 

objetivo - quando clicarmos na aba, temos que mostrar o conteudo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior.

passo 1 - dar um jeito de pegar os elementos que representam as abas no html

passo 2 - dar um jeito de identificar o clique no elemento da aba 

passo 3 - quando o usuário clicar, desmarcar a aba selecionada 

passo 4 - marcar a aba clicada como selecionada 

passo 5 - esconder conteúdo anterior 

passo 6 - mostrar conteudo da aba selecionada

*/

// passo 1 - dar um jeito de pegar os elementos que representam as abas no html

const abas = document.querySelectorAll(".aba");
// o codigo pegou os elementos do código html que tinha a mesma classe (abas) e colocou dentro da variável "abas"

abas.forEach(aba => {
    // passo 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});


function selecionarAba(aba) {
    //passo 3 - quando o usuário clicar, desmarcar a aba selecionada 
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    //passo 4 - marcar a aba clicada como selecionada 
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
 //passo 5 - esconder conteúdo anterior 
 const informacaoSelecionada = document.querySelector(".informacao.selecionado");
 informacaoSelecionada.classList.remove("selecionado");

 //passo 6 - mostrar conteudo da aba selecionada
 const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

 const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
 informacaoASerMostrada.classList.add("selecionado")
}