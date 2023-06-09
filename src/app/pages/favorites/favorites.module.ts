import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FavoritesPageComponent } from './favorites.page.component';

const routes: Routes = [
  { path: '', component: FavoritesPageComponent },
];

@NgModule({
  declarations: [FavoritesPageComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class FavoritesModule { }
