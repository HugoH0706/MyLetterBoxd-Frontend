import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedEntertainmentService {
  private baseURL = 'http://localhost:5152/api';

  constructor(private http: HttpClient) {}

  getSavedFilmsById(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseURL}/entertainment/savedentertainment/${id}`);
  }

  deleteSavedEntertainment(userID: number, entertainmentID: number): Observable<any>{
    const url = `${this.baseURL}/entertainment/savedentertainment/${userID}/${entertainmentID}`
    return this.http.delete(url);
  }
}
