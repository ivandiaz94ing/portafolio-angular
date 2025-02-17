import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: false,

  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent implements OnInit {
  products : any[] = [];
  responsiveOptions : any[] = [];

  constructor(){
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      },
    ];

  }


  ngOnInit(): void {
    this.products = [
      {
        name: 'Tennis',
        price: 10,
        image: 'producto1.png',
        inventoryStatus: 'Disponible',
        descripcion: 'Un par de zapatos versátiles y cómodos, diseñados para brindar soporte y estilo a lo largo del día. Su diseño moderno y materiales de calidad los hacen perfectos tanto para el trabajo como para salidas casuales.'
      },
      {
        name: 'Jeans',
        price: 20,
        image: 'producto2.png',
        inventoryStatus: 'Agotado',
        descripcion: 'Un par de jeans clásicos de mezclilla, cómodos y duraderos, perfectos para cualquier ocasión casual. Su ajuste entallado y diseño versátil los convierten en una prenda esencial en tu guardarropa.'
      },
      {
        name: 'Gorra',
        price: 30,
        image: 'producto3.png',
        inventoryStatus: 'Pocos',
        descripcion: 'Una gorra moderna y ajustable que protege del sol mientras añade un toque de estilo a tu atuendo. Ideal para actividades al aire libre o un look urbano casual.'
      },
      {
        name: 'Chaqueta',
        price: 12,
        image: 'producto4.png',
        inventoryStatus: 'Disponible',
        descripcion: 'Una chaqueta clásica de corte ajustado, hecha de materiales resistentes al clima. Ideal para mantenerte abrigado y con estilo durante las estaciones frías, perfecta para combinar con cualquier atuendo.'
      },
      {
        name: 'Morral',
        price: 25,
        image: 'producto5.png',
        inventoryStatus: 'Agotado',
        descripcion: 'Un práctico morral de lona con múltiples compartimentos para llevar todo lo necesario en tus aventuras diarias. Cómodo y resistente, es ideal para el trabajo, la escuela o escapadas de fin de semana.'
      },
      {
        name: 'Reloj',
        price: 37,
        image: 'producto6.png',
        inventoryStatus: 'Pocos',
        descripcion: 'Un elegante reloj de pulsera con correa de cuero y esfera minimalista. Combina funcionalidad y diseño sofisticado para complementar cualquier conjunto, ya sea formal o casual.'
      },
    ];
  }

  getSeverity(status: string){
    switch(status){
      case 'Disponible':
        return 'success';
      case 'Agotado':
        return 'danger';
      case 'Pocos' :
        return 'warning';
      default :
      return null;
    }
  }

}
