import { ICharacterInterface } from "~/types/ICharacter.interface";
import { Ref } from "@vue/runtime-core";
import { _AsyncData } from "#app/composables/asyncData";

export const useCharactersStore = defineStore('characters', {
    state: () => ({
        characters: [] as ICharacterInterface[] | Ref<ICharacterInterface[]>,
        currentCharacterId: -1,
        isLoading: false,
        searchString: '',
        currentDBOffset: 0,
        charactersPerPage: 12,
        exceededMaxDBOffset: false
    }),
    getters: {
        getFilteredCharacters(state): Array<ICharacterInterface> | undefined {
            return useMultipleSearch<ICharacterInterface>(state.characters, state.searchString)
        },
        getActiveCharacter(state): ICharacterInterface {
            return this.characters.filter(c => c.char_id === +this.currentCharacterId)[0] || null
        },
        showNoCharactersMessage(state): boolean {
            return this.currentDBOffset === 0 && this.characters.length === 0
        }
    },
    actions: {
        async loadCharacters(): Promise<boolean> {
            if (this.exceededMaxDBOffset) {
               return false;
            }
            try {
                this.isLoading = true;
                const url = `https://www.breakingbadapi.com/api/characters?limit=${this.charactersPerPage}&offset=${this.currentDBOffset}`;
                const {data, refresh} : _AsyncData<Array<ICharacterInterface>, true | Error | null> =
                    await useFetch<Array<ICharacterInterface>>(url)
                await refresh()
                if (!data.value.length) {
                    this.exceededMaxDBOffset = true
                    this.isLoading = false
                    return false
                }
                if (data.value) {
                    this.addNewCharacters(data.value)
                    this.currentDBOffset += this.charactersPerPage + 1
                }

                this.isLoading = false
                return true;
            }
            catch (e) {
                console.log(e);
            }
            this.isLoading = false

            return false;
        },
        setActiveCharacterId(charId: number):void {
          this.currentCharacterId = charId
        },
        // setCharacters(characters: ICharacterInterface[]) {
        //   this.characters = characters
        // },
        addNewCharacters(characters: ICharacterInterface[]):void {
            this.characters.push(...characters)
        }
    }
})