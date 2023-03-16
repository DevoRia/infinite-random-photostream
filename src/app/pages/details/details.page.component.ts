import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-details.page',
  templateUrl: './details.page.component.html',
  styleUrls: ['./details.page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  @Input()
    src?: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public favoritesService: FavoritesService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.src = params['id'];
    });
  }

  remove() {
    if (this.src) {
      this.favoritesService.remove$.next(this.src);
      this.router.navigate(['favorites']);
    }
  }
}
