import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Film {
  id: number;
  title: string;
}

interface Cast {
  name: string;
  character: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private baseURL = 'http://localhost:5152/api';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseURL}/entertainment/films`);
  }

  getFilmById(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseURL}/entertainment/films/${id}`);
  }

  getCast(id: number): Observable<Cast[]>{
    return this.http.get<Cast[]>(`${this.baseURL}/entertainment/castentertainment/${id}`);
  }

  getGenres(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseURL}/entertainment/genresentertainment/${id}`);
  }

  postToWatchlist(userID: number, entertainmentID: number): Observable<any> {
    const body = {userID, entertainmentID};
    return this.http.post<any>(`${this.baseURL}/user/userentertainment`, body);
  }
}
