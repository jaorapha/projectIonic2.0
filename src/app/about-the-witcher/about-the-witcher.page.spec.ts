import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutTheWitcherPage } from './about-the-witcher.page';

describe('AboutTheWitcherPage', () => {
  let component: AboutTheWitcherPage;
  let fixture: ComponentFixture<AboutTheWitcherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutTheWitcherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
