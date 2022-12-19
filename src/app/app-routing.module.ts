import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormlarioMascotaComponent } from './vistas/formlario-mascota/formlario-mascota.component';
import { ListaMascotaComponent } from './vistas/lista-mascota/lista-mascota.component';

const routes: Routes = [
  { path: '', component: ListaMascotaComponent },
  { path: 'lista/:especie', component: ListaMascotaComponent },
  { path: 'nuevaMascota', component: FormlarioMascotaComponent },
  { path: 'edit/:id', component: FormlarioMascotaComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
