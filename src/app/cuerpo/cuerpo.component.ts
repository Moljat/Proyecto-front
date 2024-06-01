import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {

  @ViewChild('audioElement') audioElement!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioElement2') audioElement2!: ElementRef<HTMLAudioElement>;

  title = 'Conteo de Precios';
  cantidades: number[] = [0,0,0,0,0];
  precios: number[] = [250,150,175,120,140];
  totalPrecio: number=0;
  valor2:number=0;

  calculateTotal() {
    this.totalPrecio = this.cantidades.reduce((total, qty, index) => total + qty * this.precios[index], 0);
  }

  playSound() {
    const audio: HTMLAudioElement = this.audioElement.nativeElement;
    audio.play();
    
  }
  playSound2() {
    const audio: HTMLAudioElement = this.audioElement2.nativeElement;
    audio.play();
    
  }

}
