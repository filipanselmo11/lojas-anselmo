import { Component } from '@angular/core';
import { ContainerComponent } from '../../shared/container/container.component';
import { CardBuscaComponent } from '../../shared/card-busca/card-busca.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerComponent, CardBuscaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
