import { Component } from '@angular/core';

@Component({
  selector: 'app-desplazar-arriba',
  standalone: false,

  templateUrl: './desplazar-arriba.component.html',
  styleUrl: './desplazar-arriba.component.css'
})
export class DesplazarArribaComponent {
  desplazarArriba() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
