// STRUCTURAL TYPING

/**
 * O sistema de tipos do TS é tipificado estruturalmente: o que significa
 * que qualquer valor que satisfaça um tipo pode ser usado como um valor
 * desse tipo. Em outras palavras, quando tu declara que um parâmetro ou
 * variável é de um determinado tipo de objeto, tu tá dizendo ao TS que
 * quaisquer que sejam os objetos que tu usar, eles precisam ter essas
 * propriedades.
 * 
 * Os seguintes tipos de objetos com alias WithFirstName e WithLastName
 * declaram apenas um único membro do tipo string. A variável hasBoth
 * por acaso tem ambas - mesmo que não tenha sido declarada como tal
 * explicitamente - então ela pode ser fornecida para variáveis que são 
 * declaradas como qualquer um dos dois tipos de objeto com alias:
 */

type WithFirstName = {
  firstName: string;
};

type WithLastName = {
  lastName: string;
};

const hasBoth = {
  firstName: "Lucille",
  lastName: "Cliffon",
};

// Ok: 'hasBoth' contains a 'firstName' property of type 'string'
let WithFirstName: WithFirstName = hasBoth;

// Ok: 'hasBoth' contains a 'lastName' property of type 'string'
let WithLastName: WithLastName = hasBoth;


/**
 * A tipagem estrutural não é o mesmo que a tipagem "duck", que vem da
 * frase "Se parece um pato e grasna como um pato, provavelmente é um pato".
 * 
 * A tipagem estrutural é quando há um sistema estático verificando o tipo
 * - no caso do TS, o verificador de tipo.
 * 
 * A digitação de pato é quando nada verifica os tipos de objeto até que
 * sejam usados em tempo de execução.
 * 
 * Em resumo: JS é tipado como pato, enquanto TS é tipado estruturalmente.
 */

