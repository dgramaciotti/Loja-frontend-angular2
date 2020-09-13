import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProdutos'
})
export class FiltroProdutosPipe implements PipeTransform {

  transform(items: any[], filter): any {
    if (!items || !filter) {
        return items;
    }
    // Logica do filtro
    if(filter.categoria === 'Todos'){
      return items.filter((el)=>{
        return el.precoMedio.toString().length === filter.preco.length && el.disponivel === filter.checked;
      })
    }
    return items.filter((el)=>{
      return (el.categoria === filter.categoria && el.disponivel === filter.checked && el.precoMedio.toString().length === filter.preco.length);
    })
}

}
