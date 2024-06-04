import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerciariaPage } from './terciaria.page';

describe('TerciariaPage', () => {
  let component: TerciariaPage;
  let fixture: ComponentFixture<TerciariaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TerciariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
