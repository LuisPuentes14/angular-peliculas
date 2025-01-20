import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenericosComponent } from "../../compartidos/componentes/listado-genericos/listado-genericos.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'app-listado-peliculas',
    imports: [DatePipe, UpperCasePipe, CurrencyPipe, ListadoGenericosComponent, MatButtonModule, MatIconModule],
    templateUrl: './listado-peliculas.component.html',
    styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
  ngOnInit(): void {   
    
  }

  title = 'angular-peliculas';

  @Input({required : true})
  peliculas! : any[];

}
