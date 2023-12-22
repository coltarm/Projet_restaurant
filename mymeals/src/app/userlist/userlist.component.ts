import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewcardComponent } from '../reviewcard/reviewcard.component';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule, ReviewcardComponent],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {

  reviewList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    //this.reviewList = [{data: 'n1'}, {data: 'n2'}, {data: 'n3'}, {data: 'n4'}];
    //this.reviewList = [1, 2, 3, 4];

    for (let i = 0; i < 4; i++) {
      this.reviewList.push(i);
    }
  }

}
