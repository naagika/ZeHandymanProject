import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // добавлен CommonModule для работы Angular-атрибутов и структурных директив
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Меняем значение переменной на противоположное
  }

  // Обработчик клика на документе
  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: Event) {
    const targetElement = event.target as HTMLElement;
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav');

    if (
      this.menuOpen &&
      targetElement !== burgerMenu && // клик не на иконку бургера
      !burgerMenu?.contains(targetElement) && // клик не на элемент бургер-меню
      !navMenu?.contains(targetElement) // клик не внутри навигации
    ) {
      this.menuOpen = false; // закрываем меню
    }
  }
}
