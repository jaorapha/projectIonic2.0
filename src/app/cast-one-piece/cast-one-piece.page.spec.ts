import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CastOnePiecePage } from './cast-one-piece.page';

describe('CastOnePiecePage', () => {
  let component: CastOnePiecePage;
  let fixture: ComponentFixture<CastOnePiecePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CastOnePiecePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
