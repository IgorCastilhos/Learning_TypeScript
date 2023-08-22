/**
 * Alguns devs funcionais
 * 
 * Tentam nunca usar classes
 * 
 * "Muito intenso pra mim"
 * 
 * O mundo do JS durante a criação e lançamento do TS no início de 2010
 * era bem diferente de hoje. Recursos como funções de seta e variáveis
 * let/const que mais tarde seriam padronizadas no ES2015 ainda eram
 * esperanças distantes no horizonte. Babel estava a alguns anos de seu
 * primeiro commit; suas ferramentas predecessoras, como o Traceur, que 
 * convertiam a sintaxe JS mais recente em antiga, não haviam alcançado
 * a adoção total do mainstream.
 * 
 * O marketing inicial e o conjunto de recursos do TS foram adaptados
 * para esse mundo. Além de sua verificação de tipo, seu transpiler foi
 * enfatizado - com classes como um exemplo frequente. Hoje em dia, o
 * suporte de classe do TS é apenas um recurso entre muitos para suportar
 * todos os recursos da linguagem JS. O TS não incentiva nem desencoraja
 * o uso de classe ou qualquer outro padrão popular de JS.
 */

/**
 * Métodos de Classe
 * 
 * O TS geralmente entende os métodos da mesma forma que entende as
 * funções autônomas. Os tipos de parâmetro são padronizados como any,
 * a menos que seja dado um tipo ou valor padrão; chamar o método requer
 * um número aceitável de argumentos; tipos de retorno geralmente podem
 * ser inferidos se a função não for recursiva.
 * 
 * Este trecho de código define uma classe Greeter com um método de classe
 * greet que recebe um único parâmetro obrigatório do tipo string:
 */

class Greeter {
  greet(name: string) {
    console.log(`${name}, do your stuff!`);
  }
}

new Greeter().greet("Miss Penny"); // Ok

new Greeter().greet();
//            ~~~~~
// Error: Expected 1 arguments, but got 0.

/**
 * Construtores de classe são tratados como métodos de classe típicos
 * com relação a seus parâmetros. O TS executará a verificação de tipo
 * para garantir que um número correto de argumentos com tipos corretos
 * seja fornecido para chamadas de método.
 * 
 * Esse construtor Greeted também espera que sua mensagem: o parâmetro
 * string seja fornecido:
 */

class Greeted {
  constructor(message: string) {
    console.log(`As I always say: ${message}`);
  }
}

new Greeted("take chances, make mistakes, get messy");

new Greeted();
// Error: Expected 1 arguments, but got 0.

/**
 * 
 */