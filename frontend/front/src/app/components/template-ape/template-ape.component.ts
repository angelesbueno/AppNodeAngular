import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ItemService } from "../../../core/item.service";

@Component({
  selector: "app-template-ape",
  templateUrl: "./template-ape.component.html",
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
export class TemplateApeComponent {
  busqueda: string;
  campo: string;

  id: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  direccion: string;
  cp: string;
  poblacion: string;
  provincia: string;
  telefono: string;
  email: string;

  respuesta: boolean = false;
  masDeUno: boolean = false;
  listaEmp: any;

  error: boolean = false;

  constructor(private item: ItemService) {}

  async enviarApe(formApe: NgForm) {
    console.log(formApe);
    this.busqueda = formApe.value.eleccion;
    this.campo = formApe.value.categoria;
    // console.log(this.campo);
    // console.log(this.busqueda);
    if (formApe.invalid) {
      this.error = true;
    } else {

      await this.item.getSearchGen(this.campo, this.busqueda).subscribe(res => {
        // console.log(res);
         console.log(res.length);
        // console.log(res[0]);
  
        if (res.length == 1) {
  
          this.respuesta = true;
          this.error = false;
          this.masDeUno = false;
  
          this.nombre = res[0].NOMBRE;
          this.apellido1 = res[0].APELLIDO1;
          this.apellido2 = res[0].APELLIDO2;
          this.direccion = res[0].DIRECCION;
          this.cp = res[0].CP;
          this.poblacion = res[0].POBLACION;
          this.provincia = res[0].PROVINCIA;
          this.telefono = res[0].TELEFONO;
          this.email = res[0].EMAIL;
  
        } else if (res.length == 0) {
          this.error = true;
          this.respuesta = false;
          this.masDeUno = false;
        }
  
        else if (res.length > 1) {
          this.error = false;
          this.respuesta = true;
          this.masDeUno = true;
          this.listaEmp = res.slice();
        }
  
      });

    }
  }
}
