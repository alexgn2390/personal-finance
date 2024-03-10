import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalWindowPage } from './modal-window.page';

describe('ModalWindowPage', () => {
  let component: ModalWindowPage;
  let fixture: ComponentFixture<ModalWindowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalWindowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
