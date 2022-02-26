import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/modelos/imagen.model';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-agregar-imagen',
  templateUrl: './agregar-imagen.component.html',
  styleUrls: ['./agregar-imagen.component.css']
})
export class AgregarImagenComponent implements OnInit {

  tutorial: Imagen = {
    titulo: '',
    link: '',
    publicado: false
  };
  submitted = false;

  constructor(private tutorialService: ImagenService) { }

  ngOnInit(): void {
  }

  guardarTutorial(): void {
    const data = {
      titulo: this.tutorial.titulo,
      link: this.tutorial.link
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  nuevoTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      titulo: '',
      link: '',
      publicado: false
    };
  }
}