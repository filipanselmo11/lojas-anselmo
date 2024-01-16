import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss',
})
export class CardBuscaComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() titulo: string = '';
  @Input() preco: string = '';
  @Input() descricao: string = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo diam vel erat pellentesque accumsan. Nam ac mollis metus. Etiam lectus felis, imperdiet vitae pellentesque quis, blandit vitae felis. Phasellus vehicula tristique accumsan. Suspendisse luctus, nunc ac feugiat fermentum, arcu lorem finibus metus, eu tempor dolor enim vitae nisl. Mauris scelerisque ipsum odio, nec hendrerit risus bibendum sit amet';

  `;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%',
      data: {
        titulo: this.titulo,
        src: this.src,
        alt: this.alt,
        descricao: this.descricao,
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log('Modal Fechado', res);
    });
  }
}
