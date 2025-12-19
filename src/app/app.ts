import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule],
  template: `
    <router-outlet />
  `,
  styles: [],
})
export class App {
}
