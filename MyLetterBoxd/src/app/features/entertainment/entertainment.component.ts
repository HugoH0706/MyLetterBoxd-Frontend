import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-entertainment',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.css'
})
export class EntertainmentComponent {

}
