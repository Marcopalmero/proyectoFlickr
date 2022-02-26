import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagen } from 'src/app/modelos/imagen.model';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-imagen-detalles',
  templateUrl: './imagen-detalles.component.html',
  styleUrls: ['./imagen-detalles.component.css']
})
export class ImagenDetallesComponent implements OnInit {

  @Input() viewMode = false;

  @Input() tutorialActual: Imagen = {
    titulo: '',
    link: '',
    publicado: false
  };

  message = ''

  constructor(
    private tutorialService: ImagenService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe({
        next: (data) => {
          this.tutorialActual = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublicado(status: boolean): void {
    const data = {
      titulo: this.tutorialActual.titulo,
      link: this.tutorialActual.link,
      publicado: status
    };

    this.message = '';

    this.tutorialService.update(this.tutorialActual.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.tutorialActual.publicado = status;
          this.message = res.message ? res.message : 'El estado ha sido actualizado correctamente!';
        },
        error: (e) => console.error(e)
      });
  }

  actualizarTutorial(): void {
    this.message = '';

    this.tutorialService.update(this.tutorialActual.id, this.tutorialActual)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Este tutorial ha sido actualizado correctamente!';
        },
        error: (e) => console.error(e)
      });
  }

  eliminarTutorial(): void {
    alert("Imagen Eliminada!");
    this.tutorialService.delete(this.tutorialActual.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutoriales']);
        },
        error: (e) => console.error(e)
      });
  }

}
