import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmsList } from "./components/films-list/films-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilmsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ghibli-films');
}
