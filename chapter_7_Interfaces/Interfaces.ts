/**
 * Por que usar apenas a
 *
 * Forma chata de tipos embutidos quando
 *
 * Nós podemos fazer a nossa própria!
 *
 * TS também inclui um recurso de "interface" preferido por muitos devs.
 * As interfaces são outra maneira de declarar uma forma de objeto com
 * um nome associado. As interfaces são em muitos aspectos semelhantes
 * aos tipos de objeto com alias, mas geralmente são preferidas por suas
 * mensagens de erro mais legíveis, desempenho mais rápido do compilador
 * e melhor interoperabilidade com as classes.
 *
 * Aliases de Types Versus Interfaces
 *
 * Aqui está uma rápida recapitulação da sintaxe de como um tipo de
 * objeto com alias descreveria um objeto com born: nubmer e name: string
 */

type Poet = {
  born: number;
  name: string;
};

// Aqui está a sintaxe equivalente para uma interface:
interface Poet2 {
  born: number;
  name: string;
}

/**
 * DICA
 * Os devs TS que preferem ponto-e-vírgula geralmente os colocam depois
 * de aliases de tipo e não depois de interfaces. Essa preferência reflete
 * a diferença entre declarar uma variável com um ; versus declarar uma
 * classe ou função sem.
 * 
 * A verificação de atribuição de TS e as mensagens de erro para 
 * interfaces também funciona e têm a mesma aparência que para tipos de 
 * objeto. Os seguintes erros de atribuição para atribuir à variável
 * valueLater seriam aproximadamente os mesmos se Poet fosse interface
 * ou alias de type:
 */

let valueLater: Poet;

// Ok
valueLater = {
  born: 2000,
  name: "Chris"
}
