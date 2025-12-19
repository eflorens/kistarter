import { computed, effect, Injectable, signal } from '@angular/core';
import { Character } from '../types/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private STORAGE_KEY = 'kibuild_characters';
  private _availableCharacters = signal<Character[]>(this.loadCharacters());

  public availableCharacters = computed(() => this._availableCharacters());
  public availableCharactersCount = computed(() => this._availableCharacters().length);

  private loadCharacters(): Character[] {
    const characters = localStorage.getItem(this.STORAGE_KEY);
    return characters ? JSON.parse(characters) : [];
  }

  public addCharacter(character: Character): void {
    this._availableCharacters.update((characters) => [...characters, character]);
  }

  public deleteCharacter(characterId: string): void {
    this._availableCharacters.update((characters: Character[]) => {
      return characters.filter((character) => character.id != characterId);
    });
  }

  public updateCharacter(updatedCharacter: Character): void {
    this._availableCharacters.update((characters: Character[]) => {
      return characters.map((character) =>
        character.id == updatedCharacter.id ? updatedCharacter : character
      );
    });
  }

  constructor() {
    effect(() => {
      const characters = this.availableCharacters();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(characters));
    });
  }
}
