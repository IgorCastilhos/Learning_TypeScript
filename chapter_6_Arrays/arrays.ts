/**
 * Matrizes e tuplas
 *
 * Um flexível e o outro fixo
 *
 * Escolha sua aventura
 *
 * As matrizes JS são extremamente flexíveis e podem conter qualquer
 * mistura de valores dentro:
 */

const elements = [true, null, undefined, 23];

elements.push('igual', ['menos']);
// Valor de elements: [truem, null, undefined, 23, 'igual', ['menos']]

/**
 * TS respeita a prática recomendada de manter um tipo de dado por array,
 * lembrando que tipo de dados está inicialmente dentro de um array e
 * permitindo apenas que o array opere com esse tipo de dados.
 *
 * Nesse exemplo, TS sabe que a matriz warriors inicialmente contém valores
 * de tipo string, portanto, embora seja permitido adicionar mais valores
 * de tipo string, adicionar qualquer outro tipo de dados não é:
 */

const warriors = ['Link', 'Gladiator'];

// OK : "Zelda" é uma string
warriors.push('Zelda');

warriors.push(true);
//            ~~~~
// Argumento do tipo "boolean" não é atribuível ao parâmetro de tipo "string"
