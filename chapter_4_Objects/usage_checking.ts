// USAGE CHECKING

/**
 * Ao fornecer um valor para um local anotado com um tipo de objeto, o
 * TS verificará se o valor pode ser atribuído a esse tipo de objeto.
 * Para começar, o valor deve ter as propriedades necessárias do tipo
 * de objeto. Se algum membro necessário no tipo de objeto estiver faltando
 * no objeto, o TS emitirá um erro de tipo.
 * 
 * O seguinte tipo de objeto com alias FirstAndLastNames requer que a
 * primeira e a última propriedades existam. Um objeto contendo ambos
 * pode ser usado em uma variável declarada como sendo do tipo
 * FirstAndLastNames, mas um objeto sem eles não é:
 */

type FirstAndLastNames = {
  first: string;
  last: string;
};

// Ok
const hasBothNames: FirstAndLastNames = {
  first: "Ramon",
  last: "Dino",
};

const hasOnlyOne: FirstAndLastNames = {
  first: "Sappho"
};

// Property "last" is missing in type '{ first: string; }'
// but required in type 'FirstAndLastNames'.

/**
 * Tipos incompatíveis entre os dois também não são permitidos. Os tipos
 * de objeto especificam os nomes das propriedades necessárias e os tipos
 * esperados dessas propriedades. Se a propriedade de um objeto não
 * corresponder, o TS relatará um erro de tipo.
 * 
 * O tipo TimeRange a seguir espera que o membro inicial seja do tipo Date.
 * O objeto hasStartString está causando um erro de tipo porque seu start
 * é do tipo string:
 */
type TimeRange = {
  start: Date;
};

const hasStartString: TimeRange = {
  start: "1869-07-12",
  // Error: Type 'string' is not assignable to type 'Date'.
}