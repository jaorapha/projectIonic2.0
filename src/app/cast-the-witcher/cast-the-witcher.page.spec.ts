import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CastTheWitcherPage } from './cast-the-witcher.page';

describe('CastTheWitcherPage', () => {
  let component: CastTheWitcherPage;
  let fixture: ComponentFixture<CastTheWitcherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CastTheWitcherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
