import { Component, OnInit, inject } from '@angular/core';
import { FilmService } from '../film/film.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-filmdetail',
  standalone: true,
  imports: [NgIf, CommonModule, RouterModule],
  templateUrl: './filmdetail.component.html',
  styleUrl: './filmdetail.component.css'
})
export class FilmdetailComponent implements OnInit {
  film: any;
  genres: any;
  cast: any;
  route = inject(ActivatedRoute);
  filmService = inject(FilmService);
  authService = inject(AuthService);
  isLoggedIn: boolean = false;

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if(id){
        this.filmService.getFilmById(parseInt(id))
              .subscribe((data) => {
                this.film = data;
              });
        this.filmService.getCast(parseInt(id))
              .subscribe((data) => {
                this.cast = data;
              });
        this.filmService.getGenres(parseInt(id))
              .subscribe((data) => {
                this.genres = data;
              });
      }
      this.isLoggedIn = this.authService.isLoggedIn();
  }

  addToWatchlist(){
    const id = this.route.snapshot.paramMap.get('id');
    const authUserJson = localStorage.getItem('authUser');
    const authUser = authUserJson ? JSON.parse(authUserJson) : null;

    if(id){
      this.filmService.postToWatchlist(authUser, parseInt(id))
              .subscribe({
                next: (response) => {
                  alert("Added movie to your watchlist!");
                  console.log("Added to watchlist successfully", response);
                },
                error: (error) => {
                  console.error("Error adding to watchlist", error);
                }
              });
    }
  }

}
