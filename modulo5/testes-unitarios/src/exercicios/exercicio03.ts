import { Character, validateCharacter } from "./exercicio01";

// *a. Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação*
// export const performAttack = (attacker: Character, defender: Character) => {
//     if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//       throw new Error("Invalid character");
//     }

//     if (attacker.strength > defender.defense) {
//       defender.life -= attacker.strength - defender.defense;
//     }
//   };
// *b. Implemente a função utilizando inversão de dependências*
export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
};
// *c. Explique, com as suas palavras, as diferenças entre as duas implementações*