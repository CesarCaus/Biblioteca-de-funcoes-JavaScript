# Documentação da Biblioteca de Funções Adicionais

Bem-vindo à documentação da biblioteca de funções. Estas funções são destinadas a manipulação e interação com o DOM (Document Object Model).

## Funções para Manipulação do CSS e DOM

### 1. `alterarEstiloCSS(ref, linkCSS)`
   - **Descrição:** Altera o link da página CSS associado ao elemento referenciado.
   - **Parâmetros:**
     - `ref`: Referência ao elemento HTML cujo estilo será modificado.
     - `linkCSS`: Novo link do arquivo CSS a ser associado.

### 2. `adicionarElemento(div, texto, elemento, atributos)`
   - **Descrição:** Adiciona um novo elemento ao DOM dentro da div especificada.
   - **Parâmetros:**
     - `div`: A div onde o novo elemento será adicionado.
     - `texto`: Texto a ser inserido no novo elemento.
     - `elemento`: Tipo de elemento a ser criado (ex: 'div', 'p', 'span', etc.).
     - `atributos`: Objeto contendo atributos a serem definidos para o novo elemento.

### 3. `removerTodosElementos(div)`
   - **Descrição:** Remove todos os elementos filhos da div especificada.
   - **Parâmetros:**
     - `div`: A div da qual os elementos filhos serão removidos.

### 4. `removerElementosEspecificos(div, elemento)`
   - **Descrição:** Remove todos os elementos do tipo especificado dentro da div.
   - **Parâmetros:**
     - `div`: A div da qual os elementos serão removidos.
     - `elemento`: Tipo de elemento a ser removido.

### 5. `removerDiv(elemento)`
   - **Descrição:** Remove um elemento específico do DOM.
   - **Parâmetros:**
     - `elemento`: O elemento a ser removido.