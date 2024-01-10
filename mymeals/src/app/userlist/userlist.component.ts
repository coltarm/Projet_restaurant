import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ReviewcardComponent } from '../reviewcard/reviewcard.component';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReviewcardComponent],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {

  request_url = 'http://localhost:3000/commentary/Sauval'
  dataRes: any;
  reviewList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.request_url).subscribe((data: any) => {
      this.dataRes = data;
      this.reviewList = this.dataRes.Comments;
    });

    /*
    for (let i = 0; i < 4; i++) {
      this.reviewList.push(i);
    }
    */
  }

}
