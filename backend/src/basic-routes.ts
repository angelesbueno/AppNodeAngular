/**
 * Recibe la app y le agrega unas rutas definidas
 */
export function BasicRoutes(app: any) {
  // Root. Agregada de forma temporal
  app.get("/", (req, res) => {
    res.send("Swagger Prueba añade a la url /api/v1/docs");
  });
}
