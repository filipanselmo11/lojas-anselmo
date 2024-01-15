import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss'
})
export class CardBuscaComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() titulo: string = '';
  @Input() preco: string = '';

}
