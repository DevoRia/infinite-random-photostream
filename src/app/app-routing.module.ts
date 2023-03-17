import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'photos', loadChildren: () => import('../app/pages/photos/photos.module').then((m) => m.PhotosModule) },
  { path: 'favorites', loadChildren: () => import('../app/pages/favorites/favorites.module').then((m) => m.FavoritesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
