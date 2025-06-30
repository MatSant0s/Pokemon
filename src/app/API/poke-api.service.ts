import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokeApiService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(offset: number = 0, limit: number = 50): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?offset=${offset}&limit=${limit}`);
  }

  getPokemonByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}