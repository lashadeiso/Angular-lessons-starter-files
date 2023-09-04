import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  baseURL = 'https://api.jikan.moe/v4';

  pokemonList!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.http
      .get(`${this.baseURL}/anime?q=pokemon&sfw`)
      .subscribe((res: any) => {
        for (let i = 0; i <= 999999999; i++) {
          if (i == 999999999) {
            this.pokemonList = res.data.slice(3, 5);
          }
        }
      });
  }
}
