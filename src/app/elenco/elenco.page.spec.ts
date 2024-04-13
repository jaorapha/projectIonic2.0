import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElencoPage } from './elenco.page';

describe('ElencoPage', () => {
  let component: ElencoPage;
  let fixture: ComponentFixture<ElencoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElencoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
