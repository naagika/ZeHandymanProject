import { Component , Input} from '@angular/core';
import { HeaderComponent } from './header/header.component'; // импортируем HeaderComponent
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { AboutProjectsComponent } from './about-projects/about-projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { provideRouter,  } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent,ContactsComponent,CommonModule, AboutProjectsComponent, TestimonialsComponent, RouterOutlet, ImageSliderComponent, FooterComponent],
   // добавляем HeaderComponent в imports
})
export class AppComponent {

  title = 'Ze Handyman';
    
}
