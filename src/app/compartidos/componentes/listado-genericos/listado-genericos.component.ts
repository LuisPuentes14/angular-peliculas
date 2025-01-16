import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-genericos',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './listado-genericos.component.html',
  styleUrl: './listado-genericos.component.css'
})
export class ListadoGenericosComponent {

  @Input({required : true})
  listado:any;

}
