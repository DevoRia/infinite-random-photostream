import { Injectable } from '@angular/core';
import {
  concatMap, from, map, Subject,
} from 'rxjs';
import { PhotoHttpService } from './photo.http.service';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  photos: string[] = [];

  photos$ = new Subject<string[]>();

  fetchNextPhotos$ = new Subject();

  constructor(private photoHttpService: PhotoHttpService) {
    this.fetchNextPhotos$.pipe(
      concatMap(() => from(this.photoHttpService.fetchNextPhotos())
        .pipe(
          map((photos) => {
            this.photos = [...this.photos, ...photos] as string[];
            this.photos$.next(this.photos);
          }),
        )),
    ).subscribe();
  }
}
