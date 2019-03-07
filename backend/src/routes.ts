/* tslint:disable */
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute } from 'tsoa';
import { ItemsController } from './controllers/ItemsController';
import * as express from 'express';

const models: TsoaRoute.Models = {
};
const validationService = new ValidationService(models);

export function RegisterRoutes(app: express.Express) {
  app.get('/api/v1/items/buscar',
    function(request: any, response: any, next: any) {
      const args = {
        campo: { "default": "", "in": "query", "name": "campo", "dataType": "string" },
        busqueda: { "default": "", "in": "query", "name": "busqueda", "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new ItemsController();


      const promise = controller.getGeneral.apply(controller, validatedArgs as any);
      promiseHandler(controller, promise, response, next);
    });
  app.get('/api/v1/items/empleado/:id',
    function(request: any, response: any, next: any) {
      const args = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new ItemsController();


      const promise = controller.getItem.apply(controller, validatedArgs as any);
      promiseHandler(controller, promise, response, next);
    });
  app.post('/api/v1/items/altaEmp',
    function(request: any, response: any, next: any) {
      const args = {
        request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new ItemsController();


      const promise = controller.postEmp.apply(controller, validatedArgs as any);
      promiseHandler(controller, promise, response, next);
    });
  app.get('/api/v1/items/mostrar',
    function(request: any, response: any, next: any) {
      const args = {
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new ItemsController();


      const promise = controller.getAll.apply(controller, validatedArgs as any);
      promiseHandler(controller, promise, response, next);
    });
  app.delete('/api/v1/items/deleteEmp/:id',
    function(request: any, response: any, next: any) {
      const args = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new ItemsController();


      const promise = controller.deleteEmp.apply(controller, validatedArgs as any);
      promiseHandler(controller, promise, response, next);
    });
  app.put('/api/v1/items/updateEmp/:id',
    function(request: any, response: any, next: any) {
      const args = {
        request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new ItemsController();


      const promise = controller.updateEmp.apply(controller, validatedArgs as any);
      promiseHandler(controller, promise, response, next);
    });


  function isController(object: any): object is Controller {
    return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
  }

  function promiseHandler(controllerObj: any, promise: any, response: any, next: any) {
    return Promise.resolve(promise)
      .then((data: any) => {
        let statusCode;
        if (isController(controllerObj)) {
          const headers = controllerObj.getHeaders();
          Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
          });

          statusCode = controllerObj.getStatus();
        }

        if (data || data === false) { // === false allows boolean result
          response.status(statusCode || 200).json(data);
        } else {
          response.status(statusCode || 204).end();
        }
      })
      .catch((error: any) => next(error));
  }

  function getValidatedArgs(args: any, request: any): any[] {
    const fieldErrors: FieldErrors = {};
    const values = Object.keys(args).map((key) => {
      const name = args[key].name;
      switch (args[key].in) {
        case 'request':
          return request;
        case 'query':
          return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors);
        case 'path':
          return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors);
        case 'header':
          return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors);
        case 'body':
          return validationService.ValidateParam(args[key], request.body, name, fieldErrors, name + '.');
        case 'body-prop':
          return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.');
      }
    });
    if (Object.keys(fieldErrors).length > 0) {
      throw new ValidateError(fieldErrors, '');
    }
    return values;
  }
}
