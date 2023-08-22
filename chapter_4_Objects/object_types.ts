 // DECLARING OBJECT TYPES

 /**
  * Inferir tipos diretamente de objetos existentes é bom, mas
  * eventualmente tu vai desejar ser capaz de declarar o tipo de um 
  * objeto explicitamente. Tu precisará de uma maneira de descrever uma
  * forma de objeto separadamente dos objetos que a satisfazem.
  * 
  * Os tipos de objeto podem ser descritos usando uma sintaxe semelhante
  * a objetos literais, mas com tipos em vez de valores para campos.
  * É a mesma sintaxe que o TS mostra em mensagens de erro sobre atribuição
  * de tipo.
  * 
  * Esta variável poetLater é do mesmo tipo de antes com name: string e 
  * born: number:
  */

 let poetLater: {
  born: number;
  name: string;
 };

 // OK
 poetLater = {
  born: 1950,
  name: "Mary Oliver",
 };

 poetLater = "Sappho";
 // Error: Type 'string' is not assignable to
 // type '{ born: number; name: string; }'