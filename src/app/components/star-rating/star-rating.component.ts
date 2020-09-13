import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {
  @Input() nota:number;
  getIconName(){
    let iconArray = new Array(5);
    let notasArray = new Array(5).fill(0);
    let compareArray = new Array(Math.round(this.nota)).fill(1);
    notasArray.forEach((number,index)=>{
      if(compareArray[index]){
        iconArray[index] = 'star';
      }else{
        iconArray[index] = 'star_border';
      }
    })
    return iconArray;
  }
  constructor() { }
  ngOnChanges(): void{
  }
  ngOnInit(): void {
  }

}
