import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { CarouselModule} from 'primeng/carousel'



@NgModule({
  declarations: [
    CardComponent,
    CarruselComponent,
    ScrollComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    CardComponent,
    ScrollComponent,
    CarruselComponent

  ]
})
export class SharedModule { }
