import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FilmsList } from "./components/films-list/films-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilmsList, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ghibli-films');
}
