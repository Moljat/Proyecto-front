import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {

  title = 'Conteo de Precios';
  cantidades: number[] = [0,0,0,0,0];
  precios: number[] = [250,150,175,120,140];
  totalPrecio: number=0;
  valor2:number=0;

  calculateTotal() {
    this.totalPrecio = this.cantidades.reduce((total, qty, index) => total + qty * this.precios[index], 0);
  }


}
