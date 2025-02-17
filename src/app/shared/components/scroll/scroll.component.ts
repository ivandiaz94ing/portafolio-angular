import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  standalone: false,

  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.css'
})
export class ScrollComponent implements OnInit {

  ngOnInit(): void {
    this.duplicarSkills();
  }

  skills = [
    'skills/icon1.png', 'skills/icon2.png', 'skills/icon3.png', 'skills/icon4.png',
    'skills/icon5.png', 'skills/icon6.png', 'skills/icon7.png', 'skills/icon8.png'
  ];

  duplicarSkills() {
    this.skills = [...this.skills, ...this.skills]; // Duplica la lista para el loop infinito
  }

}
