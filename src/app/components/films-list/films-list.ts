import { Component, signal, WritableSignal } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { FilmCard } from "../film-card/film-card";

@Component({
  selector: 'app-films-list',
  imports: [FilmCard],
  templateUrl: './films-list.html',
  styleUrl: './films-list.css'
})
export class FilmsList {

  films: WritableSignal<Film[]> = signal([
    {
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "url": "https://ghibliapi.vercel.app/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
    },
    {
      "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
      "title": "Grave of the Fireflies",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg",
      "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
      "url": "https://ghibliapi.vercel.app/films/12cfb892-aac0-4c5b-94af-521852e46d6a"
    },
    {
      "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      "title": "My Neighbor Totoro",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
      "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
      "url": "https://ghibliapi.vercel.app/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
    },
    {
      "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
      "title": "Kiki's Delivery Service",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg",
      "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
      "url": "https://ghibliapi.vercel.app/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e"
    },
    {
      "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
      "title": "Only Yesterday",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xjJU6rwzLX7Jk8HFQfVW6H5guMC.jpg",
      "description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
      "url": "https://ghibliapi.vercel.app/films/4e236f34-b981-41c3-8c65-f8c9000b94e7"
    },
    {
      "id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
      "title": "Porco Rosso",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/byKAndF6KQSDpGxp1mTr23jPbYp.jpg",
      "description": "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
      "url": "https://ghibliapi.vercel.app/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8"
    },
    {
      "id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
      "title": "Pom Poko",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg",
      "description": "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
      "url": "https://ghibliapi.vercel.app/films/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c"
    },
    {
      "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
      "title": "Whisper of the Heart",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5E3Hvbu0bg38ouYf6chGftVGqZ7.jpg",
      "description": "Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'. Curious as to who he is, Shizuku meets a boy her age whom she finds infuriating, but discovers to her shock that he is her 'Prince of Books'. As she grows closer to him, she realises that he merely read all those books to bring himself closer to her. The boy Seiji aspires to be a violin maker in Italy, and it is his dreams that make Shizuku realise that she has no clear path for her life. Knowing that her strength lies in writing, she tests her talents by writing a story about Baron, a cat statuette belonging to Seiji's grandfather.",
      "url": "https://ghibliapi.vercel.app/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3"
    },
    {
      "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
      "title": "Princess Mononoke",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg",
      "description": "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
      "url": "https://ghibliapi.vercel.app/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
    },
    {
      "id": "45204234-adfd-45cb-a505-a8e7a676b114",
      "title": "My Neighbors the Yamadas",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wTGuHmMIBBgKakY80J1D52VvQKI.jpg",
      "description": "The Yamadas are a typical middle class Japanese family in urban Tokyo and this film shows us a variety of episodes of their lives. With tales that range from the humourous to the heartbreaking, we see this family cope with life's little conflicts, problems and joys in their own way.",
      "url": "https://ghibliapi.vercel.app/films/45204234-adfd-45cb-a505-a8e7a676b114"
    },
    {
      "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c",
      "title": "Spirited Away",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      "description": "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
      "url": "https://ghibliapi.vercel.app/films/dc2e6bd1-8156-4886-adff-b39e6043af0c"
    },
    {
      "id": "90b72513-afd4-4570-84de-a56c312fdf81",
      "title": "The Cat Returns",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/avPMO5cnaGHgLaNiAIhy33WoQLm.jpg",
      "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
      "url": "https://ghibliapi.vercel.app/films/90b72513-afd4-4570-84de-a56c312fdf81"
    }
  ]);

  deleteFilm(id: string) {
    console.log(`Eliminando película con ID: ${id}... desde el componente padre`);
    this.films.update(
      films => films.filter(film => film.id !== id)
    )
  }
}
