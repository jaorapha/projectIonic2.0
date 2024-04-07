import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageUserPage } from './page-user.page';

describe('PageUserPage', () => {
  let component: PageUserPage;
  let fixture: ComponentFixture<PageUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
