import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpEvent
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ItemService {
  protected basePath = "http://localhost:3000/api/v1/items";
  // http://localhost:3000/api/v1/items/empleados?nombre=Sergio&apellido1=Carrillo&apellido2=Espejo
  public defaultHeaders = new HttpHeaders();

  nombre: string;
  apellido1: string;
  apellido2: string;
  direccion: string;
  cp: string;
  poblacion: string;
  provincia: string;
  telefono: string;
  email: string;

  id: string;
  apeBuscar: string;

  //prueba:string;

  constructor(protected httpClient: HttpClient) {}

  // Buscar por ID
  public getSearchbyId(id): Observable<any> {
    this.id = id;

    let headers2 = this.defaultHeaders;
    const httpHeaderAccepts: string[] = ["application/json"];
    headers2 = headers2.set("Access-Control-Allow-Origin", "*");
    let ruta2 = this.basePath + `/empleado/${this.id}`;

    //this.prueba = ruta2;

    console.log(ruta2);
    return this.httpClient.get<any>(ruta2, { headers: headers2 });
  }

  // Búsqueda general
  public getSearchGen(campo, busqueda): Observable<any> {
    let headers = this.defaultHeaders;
    const httpHeaderAccepts: string[] = ["application/json"];
    headers = headers.set("Access-Control-Allow-Origin", "*");
    let ruta = this.basePath + `/buscar?campo=${campo}&busqueda=${busqueda}`;

    console.log(ruta);
    return this.httpClient.get<any>(ruta, { headers: headers });
  }

  // Alta nuevo empleado
  public postNewEmp(data): Observable<any> {
    let headers3 = this.defaultHeaders;
    const httpHeaderAccepts: string[] = ["application/json"];
    headers3 = headers3.set("Access-Control-Allow-Origin", "*");
    console.log(data);
    return this.httpClient.post<any>(this.basePath + '/altaEmp', data, {
      headers: headers3
    });
  }

  // Obtener todos los empleados
  public getAll(): Observable<any> {
    let headers = this.defaultHeaders;
    const httpHeaderAccepts: string[] = ["application/json"];
    headers = headers.set("Access-Control-Allow-Origin", "*");
    let ruta = this.basePath + '/mostrar';

    return this.httpClient.get<any>(ruta, { headers: headers });
  }

  // Borrar empleado
  public deleteEmp(id): Observable<any> {
    let headers = this.defaultHeaders;
    const httpHeaderAccepts: string[] = ["application/json"];
    headers = headers.set("Access-Control-Allow-Origin", "*");
    let ruta = this.basePath + `/deleteEmp/${id}`;
    return this.httpClient.delete<any>(ruta, { headers: headers });
  }

  // Modificar empleado
  public postModEmp(empleado): Observable<any> {
    let headers = this.defaultHeaders;
    const httpHeaderAccepts: string[] = ["application/json"];
    headers = headers.set("Access-Control-Allow-Origin", "*");
    console.log(empleado);
    return this.httpClient.put<any>(this.basePath + `/updateEmp/${empleado.id}`, empleado, {
      headers: headers
    });
  }
}
