import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosPedidosComponent } from './otros-pedidos.component';

describe('OtrosPedidosComponent', () => {
  let component: OtrosPedidosComponent;
  let fixture: ComponentFixture<OtrosPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
