import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PacientesComponent } from './componentes/pacientes/pacientes.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'pacientes', component: PacientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
