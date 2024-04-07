import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutBlackKlansmanPage } from './about-black-klansman.page';

describe('AboutBlackKlansmanPage', () => {
  let component: AboutBlackKlansmanPage;
  let fixture: ComponentFixture<AboutBlackKlansmanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutBlackKlansmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
