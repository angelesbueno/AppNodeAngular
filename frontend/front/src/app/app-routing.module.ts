import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TemplateComponent } from './components/template/template.component';
import { TemplateApeComponent } from './components/template-ape/template-ape.component';
import { AltaEmpleadoComponent } from './components/alta-empleado/alta-empleado.component';
import { ListaEmpComponent } from './components/lista-emp/lista-emp.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ModificarEmpleadoComponent } from './components/modificar-empleado/modificar-empleado.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'empleadoId', component: TemplateComponent },
  { path: 'busquedaGeneral', component: TemplateApeComponent },
  { path: 'altaEmpleado', component: AltaEmpleadoComponent },
  { path: 'listaEmp', component: ListaEmpComponent },
  { path: 'empleado/:id', component: EmpleadoComponent },
  { path: 'modificarEmpleado/:id', component: ModificarEmpleadoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
