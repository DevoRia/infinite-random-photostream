import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RouterLinkComponent } from './router-link/router-link.component';
import { LoaderComponent } from './loader/loader.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RouterLinkComponent,
    LoaderComponent,
    PhotoCardComponent,
    PhotoGridComponent,
  ],
  exports: [
    HeaderComponent,
    RouterLinkComponent,
    LoaderComponent,
    PhotoCardComponent,
    PhotoGridComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
  ],
})
export class SharedModule { }
