import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // главный путь (например, домашняя страница)
  { path: 'gallery', component: GalleryComponent } // добавляем путь для галереи
];
