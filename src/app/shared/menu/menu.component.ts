import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  itensMenu = [
    {label: 'Início', link:''},
    {label:'clientes', link:'clientes'}, 
    {label:'sobre', link:'sobre'}
  ];
}
