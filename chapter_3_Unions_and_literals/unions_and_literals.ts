let mathematician = Math.random() > 0.5 ? undefined : 'Fulano da Silva';

// Que tipo é mathematician?
// TypeScript representa tipos de união usando o | (pipe) entre os valores possíveis, ou constituintes

/**
 * DECLARANDO TIPOS DE UNIÃO (Union Types)
 * 
 * Os tipos de união são um exemplo de situação em que pode ser útil
 * fornecer uma anotação de tipo explícita para uma variável, mesmo que
 * ela tenha um valor inicial. Neste exemplo, thinker começa nulo, mas é 
 * conhecido por conter potencialmente uma string. Dando a ele explicitamente uma anotação de tipo string | null permitirá que sejam
 * atribuídos valores do tipo string:
 */
let thinker: string | null = null;

if (Math.random() > 0.5) {
  thinker = "Susanne Langer"; // Ok
}

/* As declarações de tipo de união podem ser colocadas em qualquer lugar
* onde você possa declarar um tipo com uma anotação de tipo
*/

// PROPRIEDADES DE UNIÃO (Union Props)

/**
 * Quando um valor é conhecido como um tipo de união, o TS permitirá
 * apenas que você acesse as props de membro que existem em todos os
 * tipos possíveis na união. Isso lhe dará um erro de verificação de 
 * tipo se tu tentar acessar uma prop de membro que não existe em todos
 * os tipos possíveis.
 * 
 * No trecho a seguir, o physicist é do tipo number | string. Enquanto 
 * .toString() existe em ambos os tipos e pode ser usado, .toUppercase()
 * e .toFixed() não existem porque .toUpperCase() está ausente no tipo
 * number e .toFixed() está ausente no tipo string:
 */
let physicist = Math.random() > 0.5
  ? "Einstein"
  : 56;

physicist.toString(); // OK

physicist.toUpperCase();
//        ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.

physicist.toFixed();
//        ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string | number'.
// Property 'toFixed' does not exist on type 'string'.

/**
 * Para usar uma prop de um valor de tipo união que existe apenas em um
 * subconjunto dos tipos potenciais, seu código precisará indicar ao
 * TS que o valor naquele local no código é um desses tipos mais espe-
 * cíficos: um processo chamado narrowing (estreitamento).
 */

// NARROWING

/**
 *  Narrowing (Restringir ou estreitamento) é quando o TS infere de seu
 * código que um valor é de um tipo mais específico do que o que foi 
 * definido, declarado ou inferido anteriormente. Uma vez que o TS saiba
 * que o tipo de um valor é mais restrito do que o conhecido anteriormente,
 * ele permitirá que tu trate o valor como aquele tipo mais específico.
 * Uma verificação lógica que pode ser usada para restringir tipos é 
 * chamada de proteção de dados.
 * 
 * Vamos cobrir dois dos guardas de tipo mais comuns que o TS pode usar
 * para deduzir o narrowing de tipo de seu código.
 */

// LIMITAÇÃO DE ATRIBUIÇÕES (Assignment Narrowing)

/**
 * Se tu atribuir diretamente um valor a uma variável, o TS restringirá
 * o tipo da variável ao tipo desse valor.
 * 
 * Aqui a variável admiral é declarada inicialmente como um number | string,
 * mas depois de receber o valor "Grace Hopper", o TS sabe que deve ser uma
 * string.
 */

let admiral: number | string;

admiral = "Grace Hopper";

admiral.toUpperCase(); // Ok : string

admiral.toFixed();
//      ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'.

// TYPEOF CHECKS

/**
 * Além da verificação direta de valor, o TS também reconhece o operador
 * typeof ao restringir os tipos de variáveis.
 */
let researcher = Math.random() > 0.5
  ? "Rosalind Franklin"
  : 51;

if (typeof researcher === "string") {
  researcher.toUpperCase(); // Ok: string  
}

// Negações lógicas de ! e as instruções else também funcionam:
if (!(typeof researcher === "string")) {
  researcher.toFixed(); // Ok: number  
} else {
  researcher.toUpperCase(); // Ok: string
}

// Podem ser reescritos com uma instrução ternária:
typeof researcher === "string"
  ? researcher.toUpperCase() // Ok: string
  : researcher.toFixed(); // Ok: number

// As verificações por typeof são uma maneira prática e muito usada para restringir os tipos

// TIPOS LITERAIS

let specificallyAda: "Ada";

specificallyAda = "Ada"; // Ok

specificallyAda = "Byron";
// Error: Type '"Byron"' is not assignable to type '"Ada"'.

let someString = ""; // Type: string

specificallyAda = someString;
// Error: Type 'string' is not assignable to type '"Ada"'.

someString = "abcdefghijklmnopqrstuvwxyz";

// BILLION DOLLAR MISTAKE "NULL"
let nameMaybe = Math.random() > 0.5
    ? "Tony Hoare"
    : undefined;

nameMaybe.toLowerCase();