import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent  {

  @Input({required : true, transform: (value: number) => Array(value).fill(0)})
  maximoRating! : number[];

  @Input()
  ratingSeleccionado = 0;  

  @Output()
  votado = new EventEmitter<number>();

  ratingAnterior = 0  

  manejarMouseEnter(index:number){
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave(){
    if (this.ratingAnterior !== 0 ){
      this.ratingSeleccionado = this.ratingAnterior;

    }else {
      this.ratingSeleccionado= 0;
    }
  }

  manejarClick(indice:number){    
    this.ratingSeleccionado = indice + 1;
    this.ratingAnterior = this.ratingSeleccionado;
    this.votado.emit(this.ratingSeleccionado);
  }

}
