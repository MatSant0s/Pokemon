import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { PokeApiService } from '../../../API/poke-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon-table',
  standalone: true,
  imports: [NgIf, NgFor, TitleCasePipe],
  templateUrl: './pokemon-table.component.html',
  styleUrl: './pokemon-table.component.css'
})
export class PokemonTableComponent implements OnInit {
  pokemons: any[] = [];
  loading = true;
  selectedPokemon: any = null;

  constructor(private pokeApi: PokeApiService) {}

  ngOnInit() {
    this.pokeApi.getPokemons().subscribe((data) => {
      const results = data.results;
      const requests = results.map((poke: any) => this.pokeApi.getPokemonByUrl(poke.url));
      forkJoin(requests).subscribe((pokeDetails) => {
        this.pokemons = pokeDetails as any[];
        this.loading = false;
      }, () => {
        this.loading = false;
      });
    });
  }

  showDetails(poke: any) {
    this.selectedPokemon = poke;
    // No longer fetch description/species
  }

  backToTable() {
    this.selectedPokemon = null;
  }
}


