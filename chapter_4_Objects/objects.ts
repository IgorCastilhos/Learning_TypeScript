/**
 * Literais de objeto

Um conjunto de chaves e valores

Cada um com seu tipo

Tipos de objeto

TypeScript entende que o tipo da seguinte variável cantor é o de um objeto com duas propriedades:
born, do tipo number, e name, do tipo string. O acesso a esses membros
seria permitido, mas tentar acessar qualquer outro nome de membro cau-
saria um erro de tipo para esse nome não existente
 */

const cantor = {
  born: 2000,
  name: 'Katy Perry',
};

cantor['born']; // Type: number
cantor.name; // Type: string

cantor.end;
//     ~~~
// Error:Property 'end' does not exist on
// type '{ born: number; name: string; }'.
