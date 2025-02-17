import { Component, Input } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  public listaProyecto : Proyecto={name:'', descripcion:' ', image: ' '};

}
