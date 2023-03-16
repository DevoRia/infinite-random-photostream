import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from '../../app/components/header/header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain two router links', () => {
    const links = fixture.nativeElement.querySelectorAll('app-router-link');
    expect(links.length).toBe(2);
  });

  it('should have the correct links', () => {
    const links = fixture.nativeElement.querySelectorAll('app-router-link');
    expect(links[0].getAttribute('link')).toBe('/');
    expect(links[1].getAttribute('link')).toBe('/favorites');
  });

  it('should display "Photos" as the first link text', () => {
    const link = fixture.nativeElement.querySelector('app-router-link:first-of-type');
    expect(link.textContent.trim()).toBe('Photos');
  });

  it('should display "Favorites" as the second link text', () => {
    const link = fixture.nativeElement.querySelector('app-router-link:last-of-type');
    expect(link.textContent.trim()).toBe('Favorites');
  });
});
