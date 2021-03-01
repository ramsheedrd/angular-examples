import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    outlet: "sidebar"
  },
  {
    path: 'side-about',
    component: AboutComponent,
    outlet: "sidebar"
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
