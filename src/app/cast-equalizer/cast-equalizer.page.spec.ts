import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CastEqualizerPage } from './cast-equalizer.page';

describe('CastEqualizerPage', () => {
  let component: CastEqualizerPage;
  let fixture: ComponentFixture<CastEqualizerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CastEqualizerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
