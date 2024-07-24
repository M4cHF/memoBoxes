import { provideRouter, RouterModule, Routes } from '@angular/router';
import { BoxesComponent } from './boxes/boxes.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path:'',           component : HomeComponent},
    {path:'contact',    component : ContactComponent},
    {path:'boxes',      component : BoxesComponent},
    { path: '**',       redirectTo: '' } 
];

