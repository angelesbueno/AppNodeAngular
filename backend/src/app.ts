/*==============================================================================
  Imports
==============================================================================*/
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as forceHttps from "express-force-https";
import * as http from "http";
import * as log4js from "log4js";
import * as swaggerUI from "swagger-ui-express";
import * as yaml from "yamljs";

import { BasicRoutes } from "./basic-routes";
import { RegisterRoutes } from "./routes";


// We need to add the controller here to be added to routes.ts by Swagger
import { ItemsController } from "./controllers/ItemsController";

/*==============================================================================
Log4js configuration
==============================================================================*/
if (typeof process.env.LOG4JS_ENV !== "undefined" && process.env.LOG4JS_ENV === "production") {
    log4js.configure("./config/log4js_pre.json");
} else {
    log4js.configure("./config/log4js.json");
}

// Logger usado para mostrar mensajes por consola
const logger = log4js.getLogger("API");

/*==============================================================================
  Initialization
==============================================================================*/
const host = process.env.HOST || "localhost";
const port = process.env.PORT || "3000";
const app = express();

/*==============================================================================
  Server configuration
==============================================================================*/
app.options("*", cors());
app.use(cors());

// replace this with the log4js connect-logger
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: "auto"}));

// Support parsing of application/json type post data
app.use(bodyParser.json());

// Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
  extended: false
}));

if (process.env.NODE_ENV === "production") {
  app.use(forceHttps);
}

/*==============================================================================
  Load of routes
==============================================================================*/
BasicRoutes(app);       // Manual routes
RegisterRoutes(app);    // Routes generated by Swagger

// Error Handler
function clientErrorHandler(err, req, res, next) {
    if (err.hasOwnProperty("thrown") && err.thrown) {
      res.status(err.status).json(err.message);
    } else {
      next(err);
    }
  }
app.use(clientErrorHandler);

// Serve the swagger-ui on /api/v1/docs
app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(yaml.load("dist/swagger.yaml")));

/*==============================================================================
  Server's start
==============================================================================*/
const server = http.createServer(app).listen(port, () => { });
logger.info("****************** SERVER STARTED ************************");
logger.info("***************  http://%s:%s  ******************", host, port);
server.timeout = 240000;
