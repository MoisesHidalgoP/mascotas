import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { ListaMascotaComponent } from './vistas/lista-mascota/lista-mascota.component';
import { DetalleMascotaComponent } from './vistas/detalle-mascota/detalle-mascota.component';
import { FormlarioMascotaComponent } from './vistas/formlario-mascota/formlario-mascota.component';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaMascotaComponent,
    DetalleMascotaComponent,
    FormlarioMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
