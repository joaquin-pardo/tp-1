import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { GatoPage } from './gato.page';

describe('GatoPage', () => {
  let component: GatoPage;
  let fixture: ComponentFixture<GatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
