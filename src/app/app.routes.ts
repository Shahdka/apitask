import { ProductsComponent } from './products/products.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'' , redirectTo:'home',pathMatch:'full'},
    {path:'home',component: HomeComponent, title: 'home'},
    {path:'about',component: AboutComponent, title: 'about'},
    {path:'products',component:ProductsComponent, title:'productes'},
    {path:'contect',component: ContactComponent, title: 'contect'},
    {path:'**',component: NotfoundComponent, title: 'error'},

];
