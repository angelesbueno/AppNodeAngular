import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../core/item.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-modificar-empleado',
  templateUrl: './modificar-empleado.component.html',
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
export class ModificarEmpleadoComponent {

  empleado: any = {
    nombre: null,
    apellido1: null,
    apellido2: null,
    direccion: null,
    cp: null,
    poblacion: null,
    provincia: null,
    telefono: null,
    email: null,
    id: null
  };

  formInvalid: boolean = false;
  mod:boolean = false;

  constructor(private item: ItemService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {

      this.item.getSearchbyId(params['id']).subscribe(res => {

        this.empleado.nombre = res[0].NOMBRE;
        this.empleado.apellido1 = res[0].APELLIDO1;
        this.empleado.apellido2 = res[0].APELLIDO2;
        this.empleado.direccion = res[0].DIRECCION;
        this.empleado.cp = res[0].CP;
        this.empleado.poblacion = res[0].POBLACION;
        this.empleado.provincia = res[0].PROVINCIA;
        this.empleado.telefono = res[0].TELEFONO;
        this.empleado.email = res[0].EMAIL;
        this.empleado.id = params['id'];
      });
    });


  }

  async modEmp(formMod: NgForm) {
    console.log(formMod);

    if (!formMod.invalid || !formMod.touched) {

      this.formInvalid = false;
      

      if (formMod.value.nombre !== '') {
        this.empleado.nombre = formMod.value.nombre;
      }
      if (formMod.value.apellido1 !== '') {
        this.empleado.apellido1 = formMod.value.apellido1;
      }
      if (formMod.value.apellido2 !== '') {
        this.empleado.apellido2 = formMod.value.apellido2;
      }
      if (formMod.value.direccion !== '') {
        this.empleado.direccion = formMod.value.direccion;
      }
      if (formMod.value.cp !== '') {
        this.empleado.cp = formMod.value.cp;
      }
      if (formMod.value.poblacion !== '') {
        this.empleado.poblacion = formMod.value.poblacion;
      }
      if (formMod.value.provincia !== '') {
        this.empleado.provincia = formMod.value.provincia;
      }
      if (formMod.value.telefono !== '') {
        this.empleado.telefono = formMod.value.telefono;
      }
      if (formMod.value.email !== '') {
        this.empleado.email = formMod.value.email;
      }

      console.log(this.empleado);

      await this.item.postModEmp(this.empleado).subscribe(res => {
        this.mod = true;
      });

      // formMod.reset();
      // console.log('Empleado actualizado correctamente');

    } else {
      this.formInvalid = true;
      this.mod = false;
    }
  }
 }

