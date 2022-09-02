# 🌱 Introdução ao **`p5js`**

O `p5js` é uma ramificação da linguagem de programação `javascript`(Abreviado pela entensão `.js`). 

Um dos principais usos do `js` é para fazer com que os sites atuais sejam mais *inteligentes* e consigam responder/interagir melhor com o usuário.

O `javascript`, bem como `p5js` tem duas respostas ao invés de apenas uma. No nosso caso, parte da resposta é apresentada como visualização e outra é apresentada através de um `console` no editor.

## Funções

Funções são procedimentos sequenciais a serem executados.

No caso do `p5js` estudamos principalmente:

```js
function setup() {
  // your setup code here
}

function draw() {
  // your draw code here
}
```

## `setup()`

A função `setup` é executada no momento que apertamos o `run` em nosso editor, ela serve para configurar figuras, por valor em variáveis. Basicamente, o ***setup*** da nossa aplicação.

## `draw()`

A função `draw` é executada em loop enquanto o programa estiver ativo, pois ela precisa ficar constantemente checando nossa interação com a aplicação. 

Por exemplo, quando colocamos o mouse em cima e quanto tiramos o mouse, ela constantemente precisa se perguntar:

> O mouse esta no layout?

> O mouse esta fora do layout?

> O mouse clicou no layout?

## Funções personalizadas

Além das funções que são reconhecidas para execução do modelo `p5js`.

Exemplo de funções que apenas servem para alterar o valor de uma variável:

```js
function changeColor() {
  color = '#cc0a88';
}

function returnColor() {
  color = '#9f0acc'
}
```

## Dica para testes

Utilize o comando e verifique melhor o conteúdo de suas constantes e variáveis na aplicação.

```js
let teste = 'test';

console.log(teste);
```