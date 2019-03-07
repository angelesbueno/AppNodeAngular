/*==============================================================================
  Imports
==============================================================================*/
import * as express from "express";
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Security,
  Header,
  Patch,
  Path,
  Route,
  SuccessResponse,
  Tags,
  Request,
  Delete,
  Put
} from "tsoa";
// import  sqlQuery, sqlQueryAll, sqlInsertar from "../sqlHelper"
// import buscarId from "../sqlHelperNew";
// import buscarGeneral from "../sqlHelperNew";
// import altaEmpleado from "../sqlHelperNew";
// import sqlHelperNew from "../sqlHelperNew";
import * as sqlHelperNew from "../sqlHelperNew";

/*==============================================================================
  Invoice Controller
==============================================================================*/
@Route("items")
@Tags("Items")
export class ItemsController extends Controller {
  id: string;
  campo: string;
  busqueda: string;

  //SEARCH GENERAL
  @Get("buscar")
  public async getGeneral(
    @Query() campo = "",
    @Query() busqueda = ""
  ): Promise<any> {
    let general = {
      campo: campo,
      busqueda: busqueda
    };

    console.log("Campo: " + general.campo);
    console.log("Búsqueda: " + general.busqueda);

    // return await buscarGeneral(general);
    return await sqlHelperNew.buscarGeneral(general);
  }

  //SEARCH BY ID
  @SuccessResponse(200)
  @Get("empleado/{id}")
  public async getItem(@Path("id") id: string): Promise<any> {
    //this.id = id;
    console.log("Id que traigo del front: " + id);
    // return await buscarId(id);
    return await sqlHelperNew.buscarId(id);
  }

  //NEW EMP
  @SuccessResponse(200)
  @Post("altaEmp")
  public async postEmp(@Request() request: express.Request): Promise<any> {
    console.log(request);
    // return { nombre: nombre,
    //          apellido1: apellido1,
    //          apellido2: apellido2,
    //          direccion: direccion,
    //          cp: cp,
    //          poblacion: poblacion,
    //          provincia: provincia,
    //          telefono: telefono,
    //          email: email

    // };
    var data = {
      nombre: request.body.nombre,
      apellido1: request.body.apellido1,
      apellido2: request.body.apellido2,
      direccion: request.body.direccion,
      cp: request.body.cp,
      poblacion: request.body.poblacion,
      provincia: request.body.provincia,
      telefono: request.body.telefono,
      email: request.body.email
    };

    console.log(data);
    // return await altaEmpleado(data);
    return await sqlHelperNew.altaEmpleado(data);
  }

  // SHOW ALL EMP
  @SuccessResponse(200)
  @Get("mostrar")
  public async getAll(): Promise<any> {
    return await sqlHelperNew.listaEmp();
  }

  // DELETE EMP
  @SuccessResponse(200)
  @Delete("deleteEmp/{id}")
  public async deleteEmp(@Path("id") id: string): Promise<any> {
    return await sqlHelperNew.deleteEmp(id);
  }

  // UPDATE EMP
// tslint:disable-next-line: adjacent-overload-signatures
  @SuccessResponse(200)
  @Put("updateEmp/{id}")
  public async updateEmp(@Request() request: express.Request): Promise<any> {

    var empleado = {
      nombre: request.body.nombre,
      apellido1: request.body.apellido1,
      apellido2: request.body.apellido2,
      direccion: request.body.direccion,
      cp: request.body.cp,
      poblacion: request.body.poblacion,
      provincia: request.body.provincia,
      telefono: request.body.telefono,
      email: request.body.email,
      id: request.params.id
    };

    return await sqlHelperNew.modEmpleado(empleado);
  }

  // @Get("empleados")
  // public async empleados(
  //   @Query() nombre = "",
  //   @Query() apellido1 = "",
  //   @Query() apellido2 = "",
  //   @Query() direccion = "",
  //   @Query() cp = "",
  //   @Query() poblacion = "",
  //   @Query() provincia = "",
  //   @Query() telefono = "",
  //   @Query() email = "",

  //   ): Promise<any> {
  //   return { nombre: nombre,
  //            apellido1: apellido1,
  //            apellido2: apellido2,
  //            direccion: direccion,
  //            cp: cp,
  //            poblacion: poblacion,
  //            provincia: provincia,
  //            telefono: telefono,
  //            email: email

  //   };
  // }

  // @SuccessResponse(200)
  // @Post("empleados/{insertNew})
  // public async postEmp(
  //   @Path("insertNew") myJson: any,
  //   @Request() request: express.Request
  // ): Promise<any> {
  //   //console.log(request);
  //   console.log(myJson);
  //   return await sqlQueryNew(request.body);
  // }
}
