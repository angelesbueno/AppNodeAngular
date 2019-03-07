import { Component, TemplateRef } from "@angular/core";
import { ItemService } from "../../../core/item.service";
import { Router } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-lista-emp",
  templateUrl: "./lista-emp.component.html"
})
export class ListaEmpComponent {
  hayEmpleados: boolean = false;
  empleados: any;

  modalRef: BsModalRef;

  borrado: boolean = false;

  constructor(
    private item: ItemService,
    private router: Router,
    private modalService: BsModalService
  ) {
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

  verEmpleado(id: number) {
    // console.log(id);
    this.router.navigate(["/empleado", id]);
    // console.log(this.empleados);
    // console.log(this.empleados[i]);
  }

  modificarEmpleado(id: number) {
    // console.log(id);
    this.router.navigate(["/modificarEmpleado", id]);
    // console.log(this.empleados);
    // console.log(this.empleados[i]);
  }

  async borrarEmpleado(id: number, indice) {
    await this.item.deleteEmp(id).subscribe();

    this.borrado = true;
    if (this.borrado) {
      this.modalRef.hide();
      window.location.reload();
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal(template: TemplateRef<any>) {
    this.modalRef.hide();
  }
}
