import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { AboutProjectsComponent } from './about-projects/about-projects.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
 
  { path: 'about-projects', component: AboutProjectsComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '' }
  
];
