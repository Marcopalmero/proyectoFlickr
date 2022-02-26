import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios?: Usuarios[];
  usuarioActual: Usuarios = {};
  indiceActual = -1;
  email = '';

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
  
    this.recuperarUsuarios();
  }

  recuperarUsuarios(): void {
    this.usuarioService.getAll()
      .subscribe({
        next: (data) => {
          this.usuarios = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refrescarLista(): void {
    this.recuperarUsuarios();
    this.usuarioActual = {};
    this.indiceActual = -1;
  }

  setUsuarioActivo(usuario: Usuarios, indice: number): void {
    this.usuarioActual = usuario;
    this.indiceActual = indice;
  }

  eliminarTodosUsuarios(): void {
    alert("Usuarios Eliminados, cierre Sesión");
    this.usuarioService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refrescarLista();
          
        },
        error: (e) => console.error(e)
      });
  }

  buscarEmail(): void {
    this.usuarioActual = {};
    this.indiceActual = -1;

    this.usuarioService.findByEmail(this.email)  //buscarPorTitulo??????????
      .subscribe({
        next: (data) => {
          this.usuarios = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}

