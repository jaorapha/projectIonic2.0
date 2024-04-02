import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutOrangeBlackPage } from './about-orange-black.page';

describe('AboutOrangeBlackPage', () => {
  let component: AboutOrangeBlackPage;
  let fixture: ComponentFixture<AboutOrangeBlackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutOrangeBlackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
