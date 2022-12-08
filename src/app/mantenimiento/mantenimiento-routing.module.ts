import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoComponent } from './cargo/cargo.component';
import { CondigoTrabajoComponent } from './condigo-trabajo/condigo-trabajo.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path:'cargo', component:CargoComponent},
      {path:'codigo-trabajo', component:CondigoTrabajoComponent},
      {path:'empleado', component:EmpleadoComponent},
      {path:'vacaciones', component:VacacionesComponent}
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
