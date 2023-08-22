// NESTED OBJECT TYPES

/**
 * Como objetos JS podem ser aninhados como membros de outros objetos,
 * os tipos de objeto do TS devem ser capazes de representar tipos de
 * objetos aninhados no sistema de tipos. A sintaxe para fazer isso é a
 * mesma de antes, mas com um tipo de objeto {...} em vez de um nome primitivo.
 * 
 * O tipo de Poem é declarado como um objeto cuja propriedade author tem
 * firstName: string e lastName: string. A variável poemaMatches é 
 * atribuível a Poem porque corresponde a essa estrutura, enquanto 
 * poemaMismatch não é porque sua propriedade author inclui name em vez
 * de firstName e lastName:
 */

type Poem5 = {
  author: {
    firstName: string;
    lastName: string;
  };
  name: string;
};

// Ok
const poemaMatches: Poem5 = {
  author: {
    firstName: "Sylvia",
    lastName: "Plath",
  },
  name: "Lady Lazarus",
};

const poemMismatch: Poem = {
  author: {
      name: "Sylvia Plath",
  },
  // Error: Type '{ name: string; }' is not assignable
  // to type '{ firstName: string; lastName: string; }'.
  //   Object literal may only specify known properties, and 'name'
  //   does not exist in type '{ firstName: string; lastName: string; }'.
  name: "Tulips",
};