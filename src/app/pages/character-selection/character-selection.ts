import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-character-selection',
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  template: `
    <div class="container">
      <div class="left-panel">
        <h2>Sauvegardes ({{ characterService.availableCharactersCount() }})</h2>

        @if (characterService.availableCharactersCount() === 0) {
          <p>Pas de sauvegardes disponibles</p>
        }

        <div class="character-list">
          @for (character of characterService.availableCharacters(); track character.id) {
            <mat-card class="character-card">
              <mat-card-content>
                <div class="card-content">
                  <strong>{{ character.name }}</strong>
                  <button mat-icon-button (click)="deleteCharacter(character.id)" color="warn">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
              </mat-card-content>
            </mat-card>
          }
        </div>
      </div>

      <div class="right-panel">
        <h2>Créer un nouveau personnage</h2>

        <form (ngSubmit)="createCharacter()" class="character-form">
          <mat-form-field>
            <mat-label>Nom du personnage</mat-label>
            <input
              matInput
              [(ngModel)]="characterName"
              name="name"
              placeholder="Entrer un nom"
              required
            />
          </mat-form-field>

          <button
            mat-raised-button
            color="primary"
            type="submit"
            [disabled]="!characterName.trim()"
          >
            Créer
          </button>
        </form>
      </div>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      height: 100vh;
      padding: 1.5rem;
      gap: 2rem;
    }

    .left-panel {
      flex: 0 0 35%;
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }

    .right-panel {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }

    .character-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .card-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .character-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    h2 {
      margin: 0 0 1rem 0;
    }

    p {
      margin: 0.5rem 0;
    }
  `,
})
export class CharacterSelection {
  public characterService: CharacterService = inject(CharacterService);
  public characterName: string = '';

  public createCharacter(): void {
    const name = this.characterName.trim();
    if (!name) {
      return;
    }

    const now = new Date().toISOString();
    const newCharacter = {
      id: crypto.randomUUID(),
      name,
      createdAt: now,
      updatedAt: now,
    };

    this.characterService.addCharacter(newCharacter);
    this.characterName = '';
  }

  public deleteCharacter(id: string): void {
    this.characterService.deleteCharacter(id);
  }
}
