import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CastRockyPage } from './cast-rocky.page';

describe('CastRockyPage', () => {
  let component: CastRockyPage;
  let fixture: ComponentFixture<CastRockyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CastRockyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
