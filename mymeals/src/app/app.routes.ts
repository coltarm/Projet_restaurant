import { Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';

export const routes: Routes = [
    { path: '', component: AllReviewsComponent },
    { path: 'allreviews', component: AllReviewsComponent },
    { path: 'reviewlist/:username', component: UserlistComponent },
    { path: 'reviewlist', redirectTo: "allreviews", pathMatch: "full" },
    { path: 'about', component: AboutPageComponent },
];
