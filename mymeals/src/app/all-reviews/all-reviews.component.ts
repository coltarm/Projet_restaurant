import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ReviewcardComponent } from '../reviewcard/reviewcard.component';

@Component({
  selector: 'app-all-reviews',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReviewcardComponent],
  templateUrl: './all-reviews.component.html',
  styleUrl: './all-reviews.component.css'
})
export class AllReviewsComponent {

  request_url = 'http://localhost:3000/commentary'
  dataRes: any[] = [];
  reviewList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.request_url).subscribe((data: any) => {
      this.dataRes = data;
      
      for (let i = 0; i < this.dataRes.length; i++) {
        this.reviewList.push(this.dataRes[i].Comments);
      }
      
    });
  }
}
