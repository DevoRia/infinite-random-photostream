import { ComponentFixture, TestBed } from '@angular/core/testing';
import {PhotoGridComponent} from "../../app/components/photo-grid/photo-grid.component";


describe('PhotoGridComponent', () => {
  let component: PhotoGridComponent;
  let fixture: ComponentFixture<PhotoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGridComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render photo cards', () => {
    component.photos = ['photo1.jpg', 'photo2.jpg'];
    fixture.detectChanges();

    const photoCards = fixture.nativeElement.querySelectorAll('app-photo-card');
    expect(photoCards.length).toBe(2);
  });

});
