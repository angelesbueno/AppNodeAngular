import { Component } from '@angular/core';
import { ItemService } from '../../../core/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  empleado = {
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

}
