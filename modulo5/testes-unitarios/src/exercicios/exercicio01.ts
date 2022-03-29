// a. Crie uma interface para representar os personagens
export interface Character {
    name: string;
    life: number;
    strength: number;
    defense: number;
}

/*b. Crie uma função validateCharacter que valide as informações de um personagem 
(devolvendo true se for válida ou false caso contrário). 
Nenhuma das propriedades pode ser vazia. 
Em relação a vida, defesa e força, elas só podem possuir valores maiores que 0.*/
export const validateCharacter = (input: Character): boolean => {
    if (
        !input.name ||
        input.life === undefined ||
        input.strength === undefined ||
        input.defense === undefined
    ) {
        return false;
    }

    if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false;
    }

    return true;
};