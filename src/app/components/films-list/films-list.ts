import { Component, signal, WritableSignal } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { FilmCard } from "../film-card/film-card";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-films-list',
  imports: [FilmCard],
  templateUrl: './films-list.html',
  styleUrl: './films-list.css'
})
export class FilmsList {

  films: WritableSignal<Film[]> = signal([]);
  
  constructor(private http: HttpClient){
    this.http.get<Film[]>("https://ghibliapi.vercel.app/films").subscribe(
      {
        next: (data : Film[])=>{
          console.log(data);
          this.films.set(data);
        },
        error: (error)=>{
          console.log("Error fetching films:", error);
        }
      }
    )
  }

  deleteFilm(id: string) {
    console.log(`Eliminando película con ID: ${id}... desde el componente padre`);
    this.films.update(
      films => films.filter(film => film.id !== id)
    )
  }
}
