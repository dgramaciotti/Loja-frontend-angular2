import { Injectable } from '@angular/core';
import produtos from 'src/assets/database/produtos';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  getProdutos(){
    return produtos;
  }
  constructor() { }
}
