import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/modelos/imagen.model';
import { ImagenService } from 'src/app/services/imagen.service';


@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.css']
})
export class ListaImagenesComponent implements OnInit {

  tutoriales?: Imagen[];
  tutorialActual: Imagen = {};
  indiceActual = -1;
  titulo = '';

  constructor(private tutorialService: ImagenService) { }

  ngOnInit(): void {
  
    this.recuperarTutoriales();
  }

  recuperarTutoriales(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data) => {
          this.tutoriales = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refrescarLista(): void {
    this.recuperarTutoriales();
    this.tutorialActual = {};
    this.indiceActual = -1;
  }

  setTutorialActivo(tutorial: Imagen, indice: number): void {
    this.tutorialActual = tutorial;
    this.indiceActual = indice;
  }

  eliminarTodosTutoriales(): void {
    this.tutorialService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refrescarLista();
        },
        error: (e) => console.error(e)
      });
  }

  buscarTitulo(): void {
    this.tutorialActual = {};
    this.indiceActual = -1;

    this.tutorialService.findByTitulo(this.titulo)  //buscarPorTitulo??????????
      .subscribe({
        next: (data) => {
          this.tutoriales = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}

