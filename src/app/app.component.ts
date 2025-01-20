import { CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoPeliculasComponent } from "./peliculas/listado-peliculas/listado-peliculas.component";
import { MenuComponent } from "./compartidos/componentes/menu/menu.component";
import { RatingComponent } from "./compartidos/componentes/rating/rating.component";

@Component({
    selector: 'app-root',    
    imports: [RouterOutlet, DatePipe, UpperCasePipe, CurrencyPipe, NgOptimizedImage, NgIf, ListadoPeliculasComponent, MenuComponent, RatingComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'angular-peliculas'; 
}
