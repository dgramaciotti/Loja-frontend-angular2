import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-detalhes-produto',
  templateUrl: './dialog-detalhes-produto.component.html',
  styleUrls: ['./dialog-detalhes-produto.component.css']
})
export class DialogDetalhesProdutoComponent implements OnInit {
  text: string = "Este é um exemplo de texto, deve ser armazenado em um objeto e passado para cá";
  carrouselImages = [];
  currentImg: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    data.produto.imagens.forEach(imgObj => {
      this.carrouselImages.push(imgObj.nome);
    });
    this.currentImg = this.carrouselImages[0];
  }
  handleCarrousel(){
    let currentIndex = this.carrouselImages.findIndex((el)=>el === this.currentImg);
    if(currentIndex === (this.carrouselImages.length - 1)){
      this.currentImg = this.carrouselImages[0];
    }else{
      this.currentImg = this.carrouselImages[currentIndex+1];
    }
  }

  ngOnInit(): void {
  }

}
