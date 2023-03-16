import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLinkComponent } from '../../app/components/router-link/router-link.component';

describe('RouterLinkComponent', () => {
  let component: RouterLinkComponent;
  let fixture: ComponentFixture<RouterLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterLinkComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(RouterLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct router link', () => {
    const link = fixture.nativeElement.querySelector('button').getAttribute('ng-reflect-router-link');
    expect(link).toBe(component.link);
  });
});
