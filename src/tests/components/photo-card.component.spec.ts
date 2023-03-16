import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoCardComponent } from "../../app/components/photo-card/photo-card.component";

describe('PhotoCardComponent', () => {
  let component: PhotoCardComponent;
  let fixture: ComponentFixture<PhotoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCardComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the correct event when clicked', () => {
    const spy = spyOn(component.onClick, 'emit');
    component.src = 'test.jpg';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    image.click();
    expect(spy).toHaveBeenCalledWith('test.jpg');
  });

  it('should apply the correct class when withAnimation is true', () => {
    component.withAnimation = true;
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.classList.contains('clickable-image')).toBeTrue();
  });

  it('should not apply the clickable-image class when withAnimation is false', () => {
    component.withAnimation = false;
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.classList.contains('clickable-image')).toBeFalse();
  });

  it('should apply the large-image class when large is true', () => {
    component.large = true;
    fixture.detectChanges();
    const container = fixture.nativeElement.querySelector('.image-container');
    expect(container.classList.contains('large-image')).toBeTrue();
  });

  it('should not apply the large-image class when large is false', () => {
    component.large = false;
    fixture.detectChanges();
    const container = fixture.nativeElement.querySelector('.image-container');
    expect(container.classList.contains('large-image')).toBeFalse();
  });

  it('should show the star animation when withAnimation and animation are both true', () => {
    component.withAnimation = true;
    component.animation = true;
    fixture.detectChanges();
    const animation = fixture.nativeElement.querySelector('.star-animation');
    expect(animation).toBeTruthy();
  });

  it('should not show the star animation when withAnimation is true but animation is false', () => {
    component.withAnimation = true;
    component.animation = false;
    fixture.detectChanges();
    const animation = fixture.nativeElement.querySelector('.star-animation');
    expect(animation).toBeFalsy();
  });

  it('should not show the star animation when withAnimation is false', () => {
    component.withAnimation = false;
    component.animation = true;
    fixture.detectChanges();
    const animation = fixture.nativeElement.querySelector('.star-animation');
    expect(animation).toBeFalsy();
  });
});
