import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  imports: [CommonModule, FontAwesomeModule]
})
export class ImageSliderComponent {
  @Input() slides: { url: string }[] = [];
  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 500;

  currentSlide = 0;
  hidden = false;

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previous() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  jumpToSlide(index: number) {
    this.currentSlide = index;
  }
}