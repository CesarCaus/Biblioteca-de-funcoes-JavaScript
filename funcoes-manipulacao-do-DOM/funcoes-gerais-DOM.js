function alterarEstiloCSS(ref, linkCSS) { // Função para alterar o link da pagina CSS

    ref.href = linkCSS;
}

function adicionarElemento(div, texto, elemento, atributos) { //Função para adicionar novos elementos 
   
    var novoElemento = document.createElement(elemento);
    var novoTexto = document.createTextNode(texto);

    novoElemento.appendChild(novoTexto);

    if (atributos) {
        for (var key in atributos) {
            novoElemento.setAttribute(key, atributos[key]);
        }
    }

    div.appendChild(novoElemento);
}


function removerTodosElementos(div) { //Função para remover todos os elementos
 
    while (div.firstChild) {
       div.removeChild(div.firstChild);
    }
}

function removerElementosEspecificos(div, elemento) { //Função para remover elementos especificos 

    var elementos = div.getElementsByTagName(elemento);

    for (var i = elementos.length - 1; i >= 0; i--) {
            div.removeChild(elementos[i]);
    }
}

function removerDiv(elemento) { //Função para remover um elemento especifico
  
    var divPai = div.parentNode;
    divPai.removeChild(elemento);
}