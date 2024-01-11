# Documentação da Biblioteca de Funções para Validação de Formulário

Bem-vindo à documentação da biblioteca de funções para validação de formulários em projetos JavaScript. Essas funções foram projetadas para simplificar e aprimorar o processo de validação de dados em formulários. 

# Funções

## 1. salvarDados(chave, dados)
   - **Descrição:** Salva dados no Local Storage usando uma chave como referência.
   - **Parâmetros:**
     - `chave`: A chave usada como âncora no Local Storage.
     - `dados`: O conteúdo a ser armazenado.

## 2. recuperarDados(chave)
   - **Descrição:** Recupera dados (objetos) do Local Storage usando a chave.
   - **Parâmetros:**
     - `chave`: A chave utilizada para recuperar o objeto no Local Storage.

## 3. inputsVazios(inputs)
   - **Descrição:** Valida se existem inputs vazios.
   - **Parâmetros:**
     - `inputs`: Pode ser um array de inputs ou um único input.
   - **Retorna:** `true` se algum input estiver vazio, caso contrário, retorna `false`.

## 4. validarCaractereSpace(input)
   - **Descrição:** Valida se existe o caractere de espaço em um input.
   - **Parâmetros:**
     - `input`: O input a ser verificado.
   - **Retorna:** `true` se houver espaço, caso contrário, retorna `false`.

## 5. validarCaracteresInvalidos(input)
   - **Descrição:** Remove caracteres indesejáveis em um input.
   - **Parâmetros:**
     - `input`: O input a ser formatado.
   - **Retorna:** `true` se encontrar caracteres indesejáveis, caso contrário, retorna `false`.

## 6. removerCaracteresNaN(input)
   - **Descrição:** Remove caracteres não numéricos de um input.
   - **Parâmetros:**
     - `input`: O input a ser formatado.
   - **Retorna:** Uma string contendo apenas caracteres numéricos.

## 7. formatarNumeroCelular(input)
   - **Descrição:** Formata o input de número de celular enquanto o usuário digita.
   - **Parâmetros:**
     - `input`: O input a ser formatado.

## 8. validarLenghtCelular(input)
   - **Descrição:** Valida se a quantidade de caracteres no input de número de celular é igual a 11.
   - **Parâmetros:**
     - `input`: O input a ser validado.
   - **Retorna:** `true` se o tamanho for 11, caso contrário, retorna `false`.

## 9. validarFormatacaoEmail(input)
   - **Descrição:** Valida se o formato do email é válido.
   - **Parâmetros:**
     - `input`: O input contendo o email a ser validado.
   - **Retorna:** `true` se o formato for válido, caso contrário, retorna `false`.