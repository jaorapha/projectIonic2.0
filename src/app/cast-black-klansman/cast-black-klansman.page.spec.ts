import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CastBlackKlansmanPage } from './cast-black-klansman.page';

describe('CastBlackKlansmanPage', () => {
  let component: CastBlackKlansmanPage;
  let fixture: ComponentFixture<CastBlackKlansmanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CastBlackKlansmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
