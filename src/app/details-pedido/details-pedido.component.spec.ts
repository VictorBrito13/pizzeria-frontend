import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPedidoComponent } from './details-pedido.component';

describe('DetailsPedidoComponent', () => {
  let component: DetailsPedidoComponent;
  let fixture: ComponentFixture<DetailsPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
