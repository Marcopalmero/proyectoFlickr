import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { SearchImagesComponent } from './search-images/search-images.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { UsuarioDetallesComponent } from './componentes/usuario-detalles/usuario-detalles.component';
import { AgregarImagenComponent } from './componentes/agregar-imagen/agregar-imagen.component';
import { ImagenDetallesComponent } from './componentes/imagen-detalles/imagen-detalles.component';
import { ListaImagenesComponent } from './componentes/lista-imagenes/lista-imagenes.component';
import { No404Component } from './no404/no404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin/tutoriales', component: ListaUsuariosComponent },
  { path: 'admin/tutoriales/:id', component: UsuarioDetallesComponent },
  {path: 'images', component: SearchImagesComponent},
  { path: 'mod/images', component: ListaImagenesComponent },
  { path: 'mod/images/:id', component: ImagenDetallesComponent },
  { path: 'mod/agregar', component: AgregarImagenComponent },
  { path: '**', component:No404Component}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


