import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FavoritesPageComponent } from "../../app/pages/favorites/favorites.page.component";
import { FavoritesService } from "../../app/services/favorites.service";

describe('FavoritesPageComponent', () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;
  let favoritesService: FavoritesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesPageComponent],
      imports: [RouterTestingModule],
      providers: [FavoritesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
    favoritesService = TestBed.inject(FavoritesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
