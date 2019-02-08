import { Component } from '@angular/core';
import { ItemService } from '../../../core/item.service';

@Component({
  selector: 'app-lista-emp',
  templateUrl: './lista-emp.component.html'
})
export class ListaEmpComponent {

  hayEmpleados:boolean = false;
  empleados:any;

  constructor(private item: ItemService) {
    this.mostrarEmp();
   }

  async mostrarEmp() {
    await this.item.getAll().subscribe(res => {
      if (res.length > 0) {
        this.hayEmpleados = true;
        this.empleados = res.slice();
        return this.empleados;
      }
    });
  }

}
