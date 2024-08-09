import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Film {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private baseURL = 'http://localhost:5152/api/entertainment';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseURL}/films`);
  }

  getFilmById(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseURL}/films/${id}`)
  }
}
