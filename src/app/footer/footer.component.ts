import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

    Participantes: string[] = [
      'Erick Omar Olivas Montes',
      'Andrea Morales Chavez',
      'Biomara Valenzula Godina',
     
    ];

}
