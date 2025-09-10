import { Component, signal, WritableSignal } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { FilmCard } from "../film-card/film-card";
import { FilmsActions } from "../film-actions/film-actions"; // 👈 importar el nuevo componente
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-films-list',
  standalone: true,
  imports: [FilmCard, FilmsActions], 
  templateUrl: './films-list.html',
  styleUrl: './films-list.css'
})
export class FilmsList {
  films: WritableSignal<Film[]> = signal([]);

  constructor(private http: HttpClient) {
    this.loadFilms();
  }

  private loadFilms() {
    this.http.get<Film[]>("https://ghibliapi.vercel.app/films").subscribe({
      next: (data: Film[]) => this.films.set(data),
      error: (error) => console.log("Error fetching films:", error)
    });
  }

  deleteFilm(id: string) {
    this.films.update(films => films.filter(film => film.id !== id));
  }

  deleteAll() {
    this.films.set([]);
  }

  reload() {
    this.loadFilms();
  }

  sortByName() {
    this.films.update(films => [...films].sort((a, b) => a.title.localeCompare(b.title)));
  }

  invert() {
    this.films.update(films => [...films].reverse());
  }
}
