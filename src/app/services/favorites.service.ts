import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites: string[] = [];

  favorites$ = new ReplaySubject<string[]>();

  save$ = new Subject<string>();

  remove$ = new Subject<string>();

  constructor() {
    this.save$.subscribe((url) => {
      if (!this.favorites.includes(url)) {
        this.favorites.push(url);
        this.favorites$.next(this.favorites);
      }
    });

    this.remove$.subscribe((url) => {
      this.favorites = this.favorites.filter((photo) => photo !== url);
      this.favorites$.next(this.favorites);
    });
  }
}
