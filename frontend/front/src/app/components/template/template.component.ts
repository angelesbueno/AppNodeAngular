import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ItemService } from "../../../core/item.service";
@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styles: [
    `
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
      .div-invalid {
        font-size: 0.75em;
        text-align: left;
      }
      .container form {
        background-color: #f7f7f7;
        border: 1px solid silver;
        padding: 5%;
      }
      .respuesta {
        margin-top: 4em;
      }
    `
  ]
})
export class TemplateComponent {

  id: string;

  data = {
    nombre: null,
    apellido1: null,
    apellido2: null,
    direccion: null,
    cp: null,
    poblacion: null,
    provincia: null,
    telefono: null,
    email: null
  };

  respuesta: boolean = false;
  error: boolean = false;

  constructor(private item: ItemService) {}

  async enviarId(formId: NgForm) {
    console.log(formId);
    this.id = formId.value.id;
    console.log(this.id);

    await this.item.getSearchbyId(this.id).subscribe(res => {

      if (res.length > 0) {

        this.respuesta = true;
        this.error = false;
        this.data.nombre = res[0].NOMBRE;
        this.data.apellido1 = res[0].APELLIDO1;
        this.data.apellido2 = res[0].APELLIDO2;
        this.data.direccion = res[0].DIRECCION;
        this.data.cp = res[0].CP;
        this.data.poblacion = res[0].POBLACION;
        this.data.provincia = res[0].PROVINCIA;
        this.data.telefono = res[0].TELEFONO;
        this.data.email = res[0].EMAIL;
      } else {
        this.error = true;
        this.respuesta = false;
      }
    });
  }
}
