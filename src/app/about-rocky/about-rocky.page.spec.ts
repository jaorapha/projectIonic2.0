import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutRockyPage } from './about-rocky.page';

describe('AboutRockyPage', () => {
  let component: AboutRockyPage;
  let fixture: ComponentFixture<AboutRockyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutRockyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
