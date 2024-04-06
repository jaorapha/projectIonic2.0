import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutOnePiecePage } from './about-one-piece.page';

describe('AboutOnePiecePage', () => {
  let component: AboutOnePiecePage;
  let fixture: ComponentFixture<AboutOnePiecePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutOnePiecePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
