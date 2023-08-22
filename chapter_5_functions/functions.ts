/**
 * Argumentos de função
 *
 * Agora tu verá como fazer anotações de tipo com parâmetros de função e
 * tipos de retorno e por que isso é útil.
 *
 * Parâmetros de Função
 * Pegue a seguinte função sing que recebe um parâmetro de música e o
 * regista:
 */

function sing(song) {
  console.log(`Singing: ${song}`);
}

/**
 * Que tipo de valor o dev que escrever a função sing pretendia que o 
 * parâmetro song fosse fornecido?
 * Sem informações de tipo explícitas declaradas, talvez nunca
 * saibamos - o TypeScript irá considerá-lo como sendo do tipo any, o que
 * significa que o tipo do parâmetro pode ser qualquer um.
 * 
 * Assim como as variáveis, o TypeScript permite que tu declare o tipo de
 * parâmetros de função com uma anotação de tipo. Agora podemos usar uma
 : string para informar ao TS que o param da música é do tipo string:
 */

function sing2(song: string) {
  console.log(`Singing: ${song}`);
}
