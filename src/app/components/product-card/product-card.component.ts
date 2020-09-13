import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetalhesProdutoComponent } from '../dialog-detalhes-produto/dialog-detalhes-produto.component';
import { element } from 'protractor';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() produto;
  nota;
  constructor(private http:HttpClient, public dialog:MatDialog) {}
  convertNotasArrayToString(array){
    let numberArray = [];
    array.forEach(element => {
      numberArray.push(element.nota);
    });
    return numberArray.join(',');
  }
  selectHighlightedImage(){
    let selected;
    this.produto.imagens.forEach(element => {
      if(element.destacada === true){
        selected = element.nome;
      }
    });
    return selected;
  }

  openDialog(){
    if(window.innerWidth > 650){
      this.dialog.open(DialogDetalhesProdutoComponent,{data:{produto:this.produto, nota: this.nota}});
    }else{
      alert('Nao disponível para mobile!')
    }
  }

  ngOnInit(): void {
    let notasString = this.convertNotasArrayToString(this.produto.notas);
    if(this.produto.notas.length){
      let params = new HttpParams().set('expr',`sum(${notasString})/${this.produto.notas.length}`);
      this.http.get('http://api.mathjs.org/v4',{params}).subscribe((apiVal:number)=>{
        this.nota = Math.round(apiVal*10)/10;
      });
    }
  }
}
