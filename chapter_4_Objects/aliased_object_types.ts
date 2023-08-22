// ALIASED OBJECT TYPES

/**
 * Constantemente escrevendo tipos de objetos como { born: number; nome: 
 * string; } ficaria cansativo rapidamente. É mais comum usar aliases de
 * tipo para atribuir um nome a cada forma de tipo.
 * 
 * O trecho anterior pode ser reescrito com um tipo Poet, que vem com
 * o benefício adicional de tornar a mensagem de erro de atribuição do 
 * TS um pouco mais direta e legível:
 */
type Poeta = {
  born: number;
  name: string;
};

let poetLate: Poeta;

// OK
poetLate = {
  born: 1935,
  name: "Sara Teasdale",
};

poetLate = "Emily Dickinson";
// Error: Type 'string' is not assignable to type 'Poet'

