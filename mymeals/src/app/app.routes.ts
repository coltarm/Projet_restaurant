import { Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';

export const routes: Routes = [
    { path: '', component: UserlistComponent },
    { path: 'reviewlist', component: UserlistComponent },
];
