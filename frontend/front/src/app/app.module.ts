import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from '../core/item.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TemplateApeComponent } from './components/template-ape/template-ape.component';
import { HomeComponent } from './components/home/home.component';
import { AltaEmpleadoComponent } from './components/alta-empleado/alta-empleado.component';
import { ListaEmpComponent } from './components/lista-emp/lista-emp.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { ModalModule } from 'ngx-bootstrap';
import { ModalsComponent } from './components/modals/modals.component';
import { ModificarEmpleadoComponent } from './components/modificar-empleado/modificar-empleado.component';




@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    NavbarComponent,
    TemplateApeComponent,
    HomeComponent,
    AltaEmpleadoComponent,
    ListaEmpComponent,
    EmpleadoComponent,
    ModalsComponent,
    ModificarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalDialogModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
