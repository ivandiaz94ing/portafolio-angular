import { Component } from '@angular/core';


@Component({
  selector: 'app-nav',
  standalone: false,

  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isMenuVisible: boolean = false;

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    if(element !== null){
      element.classList.toggle('my-app-dark')
    }
  }

}
