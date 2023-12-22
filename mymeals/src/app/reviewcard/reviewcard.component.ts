import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-reviewcard',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './reviewcard.component.html',
  styleUrl: './reviewcard.component.css'
})
export class ReviewcardComponent {
  @Input() reviewdata: any;
}
