import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutLacasaPage } from './about-lacasa.page';

describe('AboutLacasaPage', () => {
  let component: AboutLacasaPage;
  let fixture: ComponentFixture<AboutLacasaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutLacasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
