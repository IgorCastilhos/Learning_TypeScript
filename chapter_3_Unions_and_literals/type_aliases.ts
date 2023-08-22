// TYPE ALIASES (Apelidos para os tipos)

/**
 * A maioria dos tipos de união que tu verá no código geralmente terá
 * apenas dois ou três constituintes. No entanto, às vezes tu pode 
 * encontrar um uso para tipos de união mais longos que são inconvenientes
 * de digitar repetidamente.
 * 
 * Cada uma dessas variáveis pode ser um dos cinco tipos possíveis:
 */
let rawDataFirst: boolean | number | string | null | undefined;
let rawDataSecond: boolean | number | string | null | undefined;
let rawDataThird: boolean | number | string | null | undefined;


/**
 * O TS inclui aliases de tipo para atribuir nomes mais fáceis a tipos
 * reutilizados. Um alias de tipo começa com a palavra-chave type,
 * um novo nome, = e, em seguida, qualquer tipo. Por convenção, aliases
 * de tipo recebem nomes em PascalCase:
 */

type myName = string;

/**
 * Os aliases de tipo atuam como um copiar e colar no sistema de tipos.
 * Quando o TS vê um alias de tipo, ele age como se tu tivesse digitado
 * o tipo real ao qual o alias estava se referindo. As anotações de tipo
 * das variáveis anteriores podem ser reescritas para usar um alias de
 * tipo para o tipo de união longa:
 */

type RawData = boolean | number | string | null | undefined;

let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;

// Muito mais fácil de se ler!

// COMBINANDO ALIASES DE TIPO

/**
 * Os aliases de tipo podem fazer referência a outros aliases de tipo.
 * Às vezes, pode ser útil ter aliases de tipo referindo-se uns aos outros,
 * como quando um alias de tipo é uma união de tipos que inclui (é um 
 * superconjunto de) os tipos de união dentro de outro alias de tipo.
 * 
 * Este tipo idMaybe é uma união dos tipos dentro de Id, bem como undefined
 * e null:  
*/

type Id = number | string;

// Equivalente a: number | string | undefined | null
type idMaybe = Id | undefined | null;
