import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // Добавлен CommonModule для работы Angular-атрибутов и структурных директив
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;
  activeSection: string = ''; 

  // Функция для открытия/закрытия бургер-меню
  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Меняем значение переменной на противоположное
  }

  // Обработчик клика на документе для закрытия меню при клике вне его
  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: Event) {
    const targetElement = event.target as HTMLElement;
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav');

    // Проверяем, что клик был не на бургер-меню и не внутри навигации
    if (
      this.menuOpen &&
      targetElement !== burgerMenu && // Клик не на иконку бургера
      !burgerMenu?.contains(targetElement) && // Клик не на элемент бургер-меню
      !navMenu?.contains(targetElement) // Клик не внутри навигации
    ) {
      this.menuOpen = false; // Закрываем меню
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section: any) => {
      if (scrollPos >= section.offsetTop - 60 && scrollPos < section.offsetTop + section.offsetHeight - 60) {
        this.activeSection = section.getAttribute('id'); // Устанавливаем текущий активный раздел
      }
    });
  }

  // Проверка, активен ли элемент
  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}
