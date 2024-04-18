import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CastLaCasaPage } from './cast-la-casa.page';

describe('CastLaCasaPage', () => {
  let component: CastLaCasaPage;
  let fixture: ComponentFixture<CastLaCasaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CastLaCasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
