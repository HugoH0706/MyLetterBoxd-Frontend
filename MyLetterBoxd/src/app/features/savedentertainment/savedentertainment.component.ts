import { Component, inject, OnInit } from '@angular/core';
import { SavedEntertainmentService } from './savedentertainment.service';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

interface Film {
  id: number;
  title: string;
}

@Component({
  selector: 'app-savedentertainment',
  standalone: true,
  imports: [NgFor, CommonModule, RouterModule],
  templateUrl: './savedentertainment.component.html',
  styleUrl: './savedentertainment.component.css'
})
export class SavedentertainmentComponent implements OnInit {
  films: Film[] = []; 
  savedService = inject(SavedEntertainmentService);
  route = inject(ActivatedRoute);
  
  ngOnInit(): void {
    const id = localStorage.getItem('authUser');
    if(id){
      this.savedService.getSavedFilmsById(parseInt(id))
            .subscribe((data) => {
              this.films = data;
            });
    }
  }

  deleteFromSavedEntertainment(entertainmentID: number): void {
    const userID = localStorage.getItem('authUser');
    if(userID){
      this.savedService.deleteSavedEntertainment(parseInt(userID), entertainmentID)
            .subscribe({
              next: (response) => {
                console.log('Deleted successfully', response);
                this.films = this.films.filter(f => f.id !== entertainmentID);
              }
            });
    }
  }
}
