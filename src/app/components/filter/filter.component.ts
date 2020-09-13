import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  categorias: string[] = ['Todos','Blusa','Calça','Casaco','Vestido','Body','Calçado','Meias'];
  precos: string[] = ['$','$$','$$$','$$$$'];
  selectedPreco = '$';
  selectedCategoria = 'Todos';
  checked = true;
  @Output() filtroChange:EventEmitter<object> = new EventEmitter<object>();
  constructor() {}
  sendFilterInfo(){
    this.filtroChange.emit({categoria:this.selectedCategoria,preco:this.selectedPreco,checked:this.checked});
  }
  checkboxHandler(){
    this.checked ? this.checked = false : this.checked=true;
    this.sendFilterInfo();
  }
  cleanFilter(){
    this.checked = true;
    this.selectedCategoria = 'Todos';
    this.selectedPreco = '$';
    this.filtroChange.emit({categoria:this.selectedCategoria,preco:this.selectedPreco,checked:this.checked});
  }
  ngOnInit(): void {
  }

}
