import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutFilmPage } from './about-film.page';

describe('AboutFilmPage', () => {
  let component: AboutFilmPage;
  let fixture: ComponentFixture<AboutFilmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutFilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
