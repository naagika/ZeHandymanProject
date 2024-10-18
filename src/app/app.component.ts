import { Component , Input} from '@angular/core';
import { HeaderComponent } from './header/header.component'; // импортируем HeaderComponent
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './image-slider/image-slider.component'; // Adjust the path as needed
import { url } from 'inspector';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent,CommonModule, RouterOutlet, ImageSliderComponent] // добавляем HeaderComponent в imports
})
export class AppComponent {
  isModalOpen = false;
  title = 'ZeHandyman';
 
    slides: any[]=[
      {
        url: 'assets/7.jpg',
        title: '',
        description: '',

      },
      {
        url: 'assets/2.jpg',
        title: '',
        description: '',

      },
      {
        url: 'assets/3.jpg',
        title: '',
        description: '',

      },
      {
        url: 'assets/4.jpg',
        title: '',
        description: '',

      },
      {
        url: 'assets/5.jpg',
        title: '',
        description: '',

      },
    ]
    images = [
      { url: 'assets/1.jpg' },
      { url: 'assets/2.jpg' },
      { url: 'assets/3.jpg' },
      { url: 'assets/4.jpg' },
      { url: 'assets/5.jpg' },
      { url: 'assets/6.jpg' },
      { url: 'assets/7.jpg' },
      { url: 'assets/8.jpg' },
      { url: 'assets/9.jpg' },
      { url: 'assets/10.jpg' },
      { url: 'assets/11.jpg' },
      { url: 'assets/12.jpg' },
      { url: 'assets/13.jpg' },
      { url: 'assets/14.jpg' },
      { url: 'assets/15.jpg' },
      { url: 'assets/16.jpg' },
      { url: 'assets/17.jpg' },
      { url: 'assets/18.jpg' },
      { url: 'assets/19.jpg' },
      { url: 'assets/20.jpg' },
      { url: 'assets/21.jpg' },
    ];
    openModal() {
      this.isModalOpen = true;
    }
  
    closeModal() {
      this.isModalOpen = false;
    }

    
}
