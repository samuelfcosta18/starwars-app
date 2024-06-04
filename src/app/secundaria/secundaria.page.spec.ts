import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecundariaPage } from './secundaria.page';

describe('SecundariaPage', () => {
  let component: SecundariaPage;
  let fixture: ComponentFixture<SecundariaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SecundariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
