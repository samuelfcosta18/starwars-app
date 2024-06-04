import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuartaPage } from './quarta.page';

describe('QuartaPage', () => {
  let component: QuartaPage;
  let fixture: ComponentFixture<QuartaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
