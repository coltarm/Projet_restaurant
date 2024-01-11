import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { ReviewcardComponent } from './reviewcard/reviewcard.component';
import { AboutPageComponent } from './about-page/about-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, UserlistComponent, ReviewcardComponent, AboutPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mymeals';
}
