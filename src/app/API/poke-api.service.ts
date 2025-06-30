import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokeApiService {
  //consumo serviccio y limito a 10 
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10'; 

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getPokemonByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getPokemonSpeciesById(id: number): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }
}

