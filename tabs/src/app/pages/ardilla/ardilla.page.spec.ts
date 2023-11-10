import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArdillaPage } from './ardilla.page';

describe('ArdillaPage', () => {
  let component: ArdillaPage;
  let fixture: ComponentFixture<ArdillaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArdillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
