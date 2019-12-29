import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';





import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { SearchComponent } from './componets/search/search.component';
import { ArtistaComponent } from './componets/artista/artista.component';
import { NavbarComponent } from './componets/shared/navbar/navbar.component';

//rutas

import { ROUTES } from './app.routes';


//pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

//servicios
import { SpotifyService } from './services/spotify.service';
import { TarjetasComponent } from './componets/tarjetas/tarjetas.component';
import { LoadingComponent } from './componets/shared/loading/loading.component';
import { FooterComponent } from './componets/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
