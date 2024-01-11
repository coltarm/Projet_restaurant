import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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

  request_url = 'http://localhost:3000/commentary/' //Sauval ou Vasino
  username: string = "";
  dataRes: any;
  reviewList: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = this.route.snapshot.paramMap.get('username')!;
      this.http.get(this.request_url + this.username).subscribe((data: any) => {
        this.dataRes = data;
        this.reviewList = this.dataRes.Comments;
    })});

  }

}
