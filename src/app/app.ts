import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonTableComponent } from './component/pokemon-table/pokemon-table/pokemon-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pokemon';
}
