# Dojo Jogo da Velha! :older_woman:

Boas-vindas ao repositório do Jogo da Velha, esse dojo foi desenvolvido com o intuito de estar ajudando a praticar o conteúdo visto até o momento. 

<center><img src="https://media1.giphy.com/media/6sS1G3MoTdQG8ol0Jd/giphy.gif?cid=790b7611e8a601e2d915b04089fefaf71fbf5f37b842736a&rid=giphy.gif&ct=g" width="416" height="480" ></img></center>

## Clonando o repositório :package:

```git@github.com:tryber/dojo-jogo-da-velha-fundamentos-5.4.git```

## Explicação :white_check_mark:

Para esse dojo os arquivos CSS e HTML já estão prontos, todo conteúdo deve ser desenvolvido no arquivo `script.js`
No arquivo js já existe um array com todas as combinações possíveis do jogo da velha

    [0,1,2], // linha 1
    [3,4,5], // linha 2
    [6,7,8], // linha 3
    [0,3,6], // coluna 1
    [1,4,7], // coluna 2
    [2,5,8], // coluna 3
    [0,4,8], // diagonal esqueda direita
    [2,4,6]  // diagonal direita esquerda

Cada index do array de combinações contem um array de posições.

## Passo a Passo :runner:

 - Crie uma função para gerar de maneira dinâmica `9 divs`
	- Deve conter a `classe celula`
	- Deve conter o `id` numerados de 0 a 8
	- Deve ser filho da `div grid`
	- Deve conter um evento de click chamando uma função com o nome Jogar
-	Crie a função Jogar que deve receber o evento do click
	- Deve guardar o alvo clicado
	- Checar de qual jogador é o turno 
	- Alterar o texto com o `id player` para o texto jogador da vez ( X ou O )
	- Alterar o texto do alvo clicado para o texto do jogador da vez ( X ou O )
	-  Alterar o turno dos jogadores
- Crie uma função que receba de quem foi o turno e deve checar se houve algum ganhador
	- Deve passar por cada index do array de combinações
	- Checar se cada posição dentro do array contem o texto do jogador da vez ( X ou O )
	- Somar um ponto para cada posição que conter o texto do jogador da vez dentro do array
	- Checar se os pontos são maiores ou iguais a 3
	- Alterar texto com o id player para o jogador ganhador caso tenha feito 3 pontos
- Crie uma função que verifique se deu empate
	- Deve passar por todas as células verificando se não estão vazias
	- Alterar o texto com o id player para Empatou
-	Crie uma função para resetar o jogo
	- Deve limpar todas as celulas 
- Adicione um evento de click ao botão com o id reset passando a função resetar 

## Finalizando :trophy:
Chegamos ao fim do jogo da velha, você foi capaz de utilizar e treinar os conteúdos vistos até aqui como :
  - Logica de programação
 - Laços de repetição
 - Arrays
 - Funções 
 - Dom e seletores
 - Criar elementos de forma dinâmica 
 - Eventos

