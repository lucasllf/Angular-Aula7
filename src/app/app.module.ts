import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AmigoComponent } from './amigo/amigo.component';
import { FormsModule } from '@angular/forms';
import { ComprasComponent } from './compras/compras.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/pagina1', pathMatch: 'full' },
  
  { path: '', component: Pagina1Component },
  
  { path: 'pagina2', component: Pagina2Component }
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    AmigoComponent,
    ComprasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
