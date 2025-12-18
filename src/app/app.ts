import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <mat-slide-toggle></mat-slide-toggle>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('kistarter');
}
