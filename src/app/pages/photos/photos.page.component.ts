import { Component } from '@angular/core';
import { PhotoService } from './photo.service';
import { FavoritesService } from '../favorites/favorites.service';

@Component({
  selector: 'app-photos.page',
  templateUrl: './photos.page.component.html',
  styleUrls: ['./photos.page.component.scss'],
})
export class PhotosPageComponent {
  photos: string[] = [];

  constructor(public photoService: PhotoService,
              private favoritesService: FavoritesService,
  ) {
  }

  save(url: string) {
    this.favoritesService.save$.next(url);
  }
}
