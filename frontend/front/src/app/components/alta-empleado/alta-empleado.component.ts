import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ItemService } from "../../../core/item.service";

@Component({
  selector: "app-alta-empleado",
  templateUrl: "./alta-empleado.component.html",
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
export class AltaEmpleadoComponent {
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

  formInvalid: boolean = false;
  alta:boolean = false;

  constructor(private item: ItemService) {}

  async enviarEmp(formAlta: NgForm) {
    console.log(formAlta);
    
    if (!formAlta.invalid) {
      
      this.formInvalid = false;
      this.data.nombre = formAlta.value.nombre;
      this.data.apellido1 = formAlta.value.apellido1;
      this.data.apellido2 = formAlta.value.apellido2;
      this.data.direccion = formAlta.value.direccion;
      this.data.cp = formAlta.value.cp;
      this.data.poblacion = formAlta.value.poblacion;
      this.data.provincia = formAlta.value.provincia;
      this.data.telefono = formAlta.value.telefono;
      this.data.email = formAlta.value.email;
      
      formAlta.reset();
      
      await this.item.postNewEmp(this.data).subscribe(res => {
        this.alta = true;
      });
    } else {
      this.formInvalid = true;
      this.alta = false;
    }
  }
}
