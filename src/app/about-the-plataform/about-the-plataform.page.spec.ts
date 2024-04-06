import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutThePlataformPage } from './about-the-plataform.page';

describe('AboutThePlataformPage', () => {
  let component: AboutThePlataformPage;
  let fixture: ComponentFixture<AboutThePlataformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutThePlataformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
