import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ScrollComponent } from './components/scroll/scroll.component';



@NgModule({
  declarations: [
    CardComponent,
    CarruselComponent,
    ScrollComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    ScrollComponent
  ]
})
export class SharedModule { }
