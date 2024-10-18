import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images = [
    { url: 'assets/1.jpg' },
    { url: 'assets/2.jpg' },
    { url: 'assets/3.jpg' },
    { url: 'assets/4.jpg' }
  ];
}
