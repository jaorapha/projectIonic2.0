import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CastThePlataformPage } from './cast-the-plataform.page';

describe('CastThePlataformPage', () => {
  let component: CastThePlataformPage;
  let fixture: ComponentFixture<CastThePlataformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CastThePlataformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
