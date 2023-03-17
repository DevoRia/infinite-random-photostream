import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { PhotosPageComponent } from './photos.page.component';
import { PhotoHttpService } from './photo.http.service';
import { SharedModule } from '../../shared/shared.module';
import { DetailsPageComponent } from './details/details.page.component';

const routes: Routes = [
  { path: '', component: PhotosPageComponent },
  { path: ':id', component: DetailsPageComponent },
];

@NgModule({
  declarations: [PhotosPageComponent, DetailsPageComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), MatButtonModule],
  providers: [PhotoHttpService],
})
export class PhotosModule { }
