// EXCESS PROPERTY CHECKING

/**
 * O TS relatará um erro de tipo se uma variável for declarada com um tipo
 * de objeto e seu valor inicial tiver mais campos do que seu tipo descreve.
 * Portanto, declarar uma variável como sendo de um tipo de objeto é uma
 * forma de fazer com que o verificador de tipos tenha certeza de que ela
 * possui apenas os campos esperados naquele tipo.
 * 
 * A seguinte var poetMatch possui exatamente os campos descritos no 
 * tipo de objeto com alias de Poet, enquanto extraProperty causa um erro
 * de tipo por possuir uma propriedade extra:
 */

type Poet4 = {
  born: number;
  name: string;
}

// Ok : all field match what's expected in Poet4
const poetMatch: Poet4 = {
  born: 1928,
  name: "Maya Angelou"
};

const extraProperty: Poet4 = {
  activiy: "Walkign",
  born: 1935,
  name: "May Oliver",
};