import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosPageComponent } from './pages/photos/photos.page.component';
import { FavoritesPageComponent } from './pages/favorites/favorites.page.component';
import { DetailsPageComponent } from './pages/details/details.page.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterLinkComponent } from './components/router-link/router-link.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosPageComponent,
    FavoritesPageComponent,
    DetailsPageComponent,
    HeaderComponent,
    RouterLinkComponent,
    LoaderComponent,
    PhotoCardComponent,
    PhotoGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
