import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.css']
})
export class AgregarUsuariosComponent implements OnInit {

  Usuario: Usuarios = {
    email: '',
    password:'',
    username:''
  };
  submitted = false;

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
  }

  guardarUsuario(): void {
    const data = {
      email: this.Usuario.email,
      password: this.Usuario.password,
      username: this.Usuario.username
    };

    this.usuarioService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  nuevoUsuario(): void {
    this.submitted = false;
    this.Usuario = {
      email: '',
      password: '',
      username: false
    };
  }
}
