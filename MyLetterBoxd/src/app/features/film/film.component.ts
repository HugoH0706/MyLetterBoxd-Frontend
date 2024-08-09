import { Component, inject, OnInit } from '@angular/core';
import { FilmService } from './film.service';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [NgFor, CommonModule, RouterModule],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent implements OnInit {
  films: any[] = [];
  filmService = inject(FilmService);

  ngOnInit(): void {
      this.filmService.getFilms()
          .subscribe((data) => {
            this.films = data;
          });
  }
}
