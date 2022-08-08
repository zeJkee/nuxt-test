export interface ICharacterInterface {
    char_id: number,
    name: string,
    birthday: string,
    occupation: Array<string>,
    img: string,
    status: string,
    nickname: string,
    appearance: Array<Number>,
    portrayed: string,
    category: string,
    better_call_saul_appearance: []
}

export interface ICharactersInterface extends Array<ICharacterInterface>{}