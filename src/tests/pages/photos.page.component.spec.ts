import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosPageComponent } from "../../app/pages/photos/photos.page.component";
import { PhotoService } from "../../app/pages/photos/photo.service";
import { FavoritesService } from "../../app/pages/favorites/favorites.service";
import { PhotoGridComponent } from "../../app/shared/photo-grid/photo-grid.component";
import { HttpClientModule } from '@angular/common/http';

describe('PhotosPageComponent', () => {
  let component: PhotosPageComponent;
  let fixture: ComponentFixture<PhotosPageComponent>;
  let photoService: PhotoService;
  let favoritesService: FavoritesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosPageComponent, PhotoGridComponent ],
      providers: [ PhotoService, FavoritesService ],
      imports: [ HttpClientModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosPageComponent);
    component = fixture.componentInstance;
    photoService = TestBed.inject(PhotoService);
    favoritesService = TestBed.inject(FavoritesService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
