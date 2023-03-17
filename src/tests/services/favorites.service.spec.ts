import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import {FavoritesService} from "../../app/pages/favorites/favorites.service";
import {environment} from "../../environments/environment";

describe('FavoritesService', () => {
  let service: FavoritesService;
  const photoServer = environment.photoServer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add new favorite URLs to favorites array and emit updated favorites array', () => {
    const mockUrl = `${photoServer}/image.png`;

    service.save$.next(mockUrl);
    service.favorites$.pipe(take(1)).subscribe(favorites => {
      expect(favorites).toContain(mockUrl);
    });
  });

});
