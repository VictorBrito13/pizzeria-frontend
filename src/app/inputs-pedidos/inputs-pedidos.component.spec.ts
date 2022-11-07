import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsPedidosComponent } from './inputs-pedidos.component';

describe('InputsPedidosComponent', () => {
  let component: InputsPedidosComponent;
  let fixture: ComponentFixture<InputsPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
