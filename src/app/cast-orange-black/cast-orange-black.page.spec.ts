import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CastOrangeBlackPage } from './cast-orange-black.page';

describe('CastOrangeBlackPage', () => {
  let component: CastOrangeBlackPage;
  let fixture: ComponentFixture<CastOrangeBlackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CastOrangeBlackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
