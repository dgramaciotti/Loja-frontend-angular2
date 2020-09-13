import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/produtos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'loja-virtual';
  produtosService:ProdutosService;
  produtosArray;
  filterData;
  notifyChanges(data){
   this.filterData = data;
  }
  ngOnInit():void{

  }
  constructor(){
    this.produtosService = new ProdutosService();
    this.produtosArray = this.produtosService.getProdutos();
  }
}
