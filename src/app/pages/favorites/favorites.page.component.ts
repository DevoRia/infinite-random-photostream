import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites.page',
  templateUrl: './favorites.page.component.html',
  styleUrls: ['./favorites.page.component.scss'],
})
export class FavoritesPageComponent {
  constructor(public favoritesService: FavoritesService,
              private router: Router,
  ) {
  }

  goToDetails(url: string) {
    this.router.navigate(['photos', url]);
  }
}
