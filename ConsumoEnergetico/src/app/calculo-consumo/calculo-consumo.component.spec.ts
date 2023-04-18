import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoConsumoComponent } from './calculo-consumo.component';

describe('CalculoConsumoComponent', () => {
  let component: CalculoConsumoComponent;
  let fixture: ComponentFixture<CalculoConsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoConsumoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
