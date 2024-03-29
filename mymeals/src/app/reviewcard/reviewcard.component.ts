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
  /*pathNote1:any = "src/note1";
  pathNote2:any = "src/note2";
  pathNote3:any = "src/note3";
  pathNote4:any = "src/note4";
  pathNote5:any = "src/note5";*/
}
