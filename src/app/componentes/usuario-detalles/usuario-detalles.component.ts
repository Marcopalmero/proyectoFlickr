import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrls: ['./usuario-detalles.component.css']
})
export class UsuarioDetallesComponent implements OnInit {

  @Input() viewMode = false;

  @Input() usuarioActual: Usuarios = {
    email: '',
    password: '',
    username: '',
    role_id:''
  };

  message = ''

  constructor(
    private usuarioService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUsuario(this.route.snapshot.params["id"]);
    }
  }

  getUsuario(id: string): void {
    this.usuarioService.get(id)
      .subscribe({
        next: (data) => {
          this.usuarioActual = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublicado(status: boolean): void {
    const data = {
      email: this.usuarioActual.email,
      password: this.usuarioActual.password,
      username: this.usuarioActual.username,
      role_id: this.usuarioActual.role_id
    };

    this.message = '';
  }

  actualizarUsuario(): void {
    this.message = '';

    this.usuarioService.update(this.usuarioActual.id, this.usuarioActual)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Este usuario ha sido actualizado correctamente!';
        },
        error: (e) => console.error(e)
      });
  }

  eliminarUsuario(): void {  
    this.usuarioService.delete(this.usuarioActual.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/usuarios']);
        },
        error: (e) => console.error(e)
      });
        alert("Usuario Eliminado!");
  }
}