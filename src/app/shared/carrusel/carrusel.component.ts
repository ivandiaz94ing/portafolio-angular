import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: false,

  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent implements OnInit {
  proyectos : any[] = [];
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
    this.proyectos = [
      {
        name: 'Master English 7',
        image: 'app-english-angular.png',
        alt: 'Aprende ingles en 7 dias',
        link: '#',
        descripcion: 'Esta aplicacion está hecha con base al libro del señor Ramon Campaño llamado aprende ingles en 7 días.'
      },
      {
        name: 'Juego de cartas',
        image: 'juego-cartas.png',
        alt: 'blackjack',
        link: 'https://ivanarturo-vite-app.netlify.app/',
        descripcion: 'Desarrollé este juego de cartas interactivo como parte del curso de JavaScript Moderno impartido por el profesor Fernando Herrera en Udemy.'
      },
      {
        name: 'Auth JWT',
        image: 'login-jwt.png',
        alt: 'auth JWT',
        link: 'https://app-gym-angular.netlify.app/',
        descripcion: 'En este es un sisteme de autenticacion profesional donde utilizo para la parte del backend Node js y del lado del frotend Angular js usando los famosos JWT.'
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
