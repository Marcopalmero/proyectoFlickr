import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from '../_helpers/auth.interceptor';
import { TokenStorageService } from './_services/token-storage.service';
import { SearchImagesComponent } from './search-images/search-images.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { UsuarioDetallesComponent } from './componentes/usuario-detalles/usuario-detalles.component';
import { AgregarUsuariosComponent } from './componentes/agregar-usuarios/agregar-usuarios.component';
import { AgregarImagenComponent } from './componentes/agregar-imagen/agregar-imagen.component';
import { ImagenDetallesComponent } from './componentes/imagen-detalles/imagen-detalles.component';
import { ListaImagenesComponent } from './componentes/lista-imagenes/lista-imagenes.component';
import { No404Component } from './no404/no404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    SearchImagesComponent,
    ListaUsuariosComponent,
    UsuarioDetallesComponent,
    AgregarUsuariosComponent,
    AgregarImagenComponent,
    ImagenDetallesComponent,
    ListaImagenesComponent,
    No404Component,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }