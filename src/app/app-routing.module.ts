import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosPageComponent } from './pages/photos/photos.page.component';
import { FavoritesPageComponent } from './pages/favorites/favorites.page.component';
import { DetailsPageComponent } from './pages/details/details.page.component';

const routes: Routes = [
  { path: '', component: PhotosPageComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'photos/:id', component: DetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
