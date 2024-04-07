import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutEqualizerPage } from './about-equalizer.page';

describe('AboutEqualizerPage', () => {
  let component: AboutEqualizerPage;
  let fixture: ComponentFixture<AboutEqualizerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutEqualizerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
