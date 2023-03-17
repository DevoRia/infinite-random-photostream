import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { DetailsPageComponent } from "../../app/pages/photos/details/details.page.component";
import { FavoritesService } from "../../app/pages/favorites/favorites.service";

describe('DetailsPageComponent', () => {
  let component: DetailsPageComponent;
  let fixture: ComponentFixture<DetailsPageComponent>;
  let activatedRoute: ActivatedRoute;
  let router: Router;
  let favoritesService: FavoritesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPageComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'photo-id' })
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        },
        {
          provide: FavoritesService,
          useValue: {
            remove$: {
              next: jasmine.createSpy('remove$')
            }
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPageComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    favoritesService = TestBed.inject(FavoritesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the photo ID from the route params', () => {
    expect(component.src).toBe('photo-id');
  });

  it('should remove the photo from favorites when the remove button is clicked', () => {
    component.remove();
    expect(favoritesService.remove$.next).toHaveBeenCalledWith('photo-id');
    expect(router.navigate).toHaveBeenCalledWith(['favorites']);
  });
});
