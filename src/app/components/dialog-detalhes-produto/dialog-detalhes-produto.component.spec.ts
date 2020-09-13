import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalhesProdutoComponent } from './dialog-detalhes-produto.component';

describe('DialogDetalhesProdutoComponent', () => {
  let component: DialogDetalhesProdutoComponent;
  let fixture: ComponentFixture<DialogDetalhesProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDetalhesProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalhesProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
