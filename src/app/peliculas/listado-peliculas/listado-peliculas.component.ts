import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenericosComponent } from "../../compartidos/componentes/listado-genericos/listado-genericos.component";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, ListadoGenericosComponent, MatButtonModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
  ngOnInit(): void {   
    
  }

  title = 'angular-peliculas';

  @Input({required : true})
  peliculas! : any[];

  agregarPelicula(){ 

    this.peliculas.push({
      titulo: "Inception",
      fechaLanzamiento: new Date("2012-07-03"),
      precio: 50
    })
  }

  eliminarPelicula(pelicula:any){
    this.peliculas.splice(pelicula, 1);
  }
}
