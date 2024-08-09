import { Component, OnInit, inject } from '@angular/core';
import { FilmService } from '../film/film.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-filmdetail',
  standalone: true,
  imports: [NgIf, CommonModule, RouterModule],
  templateUrl: './filmdetail.component.html',
  styleUrl: './filmdetail.component.css'
})
export class FilmdetailComponent implements OnInit {
  film: any;
  route = inject(ActivatedRoute);
  filmService = inject(FilmService);

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if(id){
        this.filmService.getFilmById(parseInt(id))
                        .subscribe((data) => {
                          this.film = data;
                        });
      }
  }

}
