// const db2 = require('ibm_db');

// var config = "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net;PORT=50001;PROTOCOL=TCPIP;UID=gqk27465;PWD=w70jfr559^c9s1cp;Security=SSL";

// var funcionFecha = function () {
//   var today = new Date();
//   var dd = today.getDate();
//   var mm = today.getMonth() + 1;
//   var yyyy = today.getFullYear();
//   console.log(dd + "/" + mm + "/" + yyyy);
//   return dd + "/" + mm + "/" + yyyy;
// }
// let sqlQueryAll = function(fDesde, fHasta, usuario, proveedor, estado, resultado) {
//     return new Promise((resolve, reject) => {
//         let strQuery = "";
//         strQuery = strQuery + "SELECT * FROM ROBOTS WHERE ";
//         strQeury = strQuery + "FECHA BETWEEN '" + fDesde + ' AND "' + fHasta + "' AND ";
//         strQuery = strQuery + "USUARIO LIKE '%" + usuario + "%' AND ";
//         strQuery = strQuery + "PROVEEDOR LIKE '%" + proveedor + "%' AND ";
//         strQuery = strQuery + "ESTADO LIKE '%" + estado + "%' AND ";
//         strQuery = strQuery + "RESULTADO LIKE '%" + resultado + "%'";
//         console.log(strQuery);

//         db2.open(config, function(err, conn) {
//             if (err) return console.log(err);

//             conn.query(strQuery, function(err, data) {
//                 if (err) {
//                     console.log(err);
//                     reject(err);
//                 } else {
//                     conn.close();
//                     resolve(data);
//                 }
//             });
//         });
//     });
// }
// let sqlQuery = function(pId) {
//     return new Promise((resolve, reject) => {
//         var strQuery = "SELECT * FROM ROBOTS WHERE ID='" + pId + "'";
//         console.log(strQuery);

//         db2.open(config, function(err, conn) {
//             if (err) return console.log(err);

//             conn.query(strQuery, function(err, data) {
//                 if (err) {
//                     console.log(err);
//                     reject(err);
//                 } else {
//                     conn.close();
//                     resolve(data);
//                 }
//             });
//         });
//     });
// }

// let sqlInsertar = function(jsonDatos) {
//     return new Promise((resolve, reject) => {
//         var strSql = "SELECT ID FROM NEW TABLE(INSERT INTO ROBOTS(SSCC,PEDIDO,ALBARAN,USUARIO,EMPRESA,DEPARTAMENTO,NUMERODEBULTOS,PAPELPRINT,TICKETPRINT,DATE,OBS,ESTADO)";

//         strSql = strSql + " VALUES ('" + jsonDatos.SSCC + "',";
//         strSql = strSql + "'" + jsonDatos.order + "',";
//         strSql = strSql + "'" + jsonDatos.Albaran + "',";
//         strSql = strSql + "'" + jsonDatos.user + "',";
//         strSql = strSql + "'" + jsonDatos.company + "',";
//         strSql = strSql + "'" + jsonDatos.departament + "',";
//         strSql = strSql + "'" + jsonDatos.quantity + "',";
//         strSql = strSql + "'" + jsonDatos.papelPrint + "',";
//         strSql = strSql + "'" + jsonDatos.ticketPrint + "',";
//         strSql = strSql + "'" + funcionFecha() + "',";
//         strSql = strSql + "'Proceso pendiente de Automatizar',";
//         strSql = strSql + "'0'))";

//         console.log(strSql);

//         db2.open(config, function(err, conn) {
//             if (err) {
//                 console.log(err);
//             }

//             conn.query(strSql, function(err, result) {
//                 if (err) {
//                     console.log(err);
//                     reject(err);
//                 } else {
//                     conn.close();
//                     console.log(result);
//                     resolve(result);
//                 }
//             });
//         });
//     });
// }
// exports.sqlQueryAll = sqlQueryAll;
// exports.sqlQuery = sqlQuery;
// exports.sqlInsertar = sqlInsertar;

// MYSQL DDBB
//import mssql from 'mssql';

// const sql = require('mssql');


// const pool = new sql.ConnectionPool({
//     user: 'sa',
//     password: 'P@ssw0rd01',
//     server: '127.0.0.1',
//     database: 'EMPRESA2'
// })

// CONNECT DDBB

// const sql = require('mssql');

// const config = 'mssql://sa:P@ssw0rd01@127.0.0.1/EMPRESA2';

// // QUERY SEARCH GENERAL
// function buscarGeneral(general) {
//     console.log('entra en general');
//     sql.close();

//     let campo = general.campo.toUpperCase();
//     let busqueda = general.busqueda;

//     return new Promise((resolve, reject) => {

//         let strQuery = `SELECT * FROM EMPLEADOS WHERE ${campo} LIKE '${busqueda}'`;
//         console.log(strQuery);
//         sql.connect(config, function(err) {
//             if (err) {
//                 console.log(err);
//             }
//             var request = new sql.Request();
//             request.query(strQuery, function(err, result) {

//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(result.recordset);
//                 }

//             });
//         });
//     });

// }

// // QUERY SEARCH ID
// function buscarId(id) {
//     sql.close();
//     return new Promise((resolve, reject) => {
//         var strQuery = "SELECT * FROM EMPLEADOS WHERE ID='" + id + "'";
//         console.log(strQuery);
//         sql.connect(config, function(err) {
//             if (err) {
//                 console.log(err);
//             }
//             var request = new sql.Request();
//             request.query(strQuery, function(err, result) {

//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(result.recordset);
//                 }

//             });
//         });
//     });
// };




// // QUERY NEW EMP
// function altaEmpleado(data) {
//     sql.close();
//     return new Promise((resolve, reject) => {
//         var strQuery = `INSERT INTO EMPLEADOS (NOMBRE, APELLIDO1, APELLIDO2, DIRECCION, CP, POBLACION, PROVINCIA, TELEFONO, EMAIL)
//                                         VALUES ('${data.nombre}', '${data.apellido1}', '${data.apellido2}', '${data.direccion}', '${data.cp}', '${data.poblacion}', '${data.provincia}', '${data.telefono}', '${data.email}')`;
//         //console.log(strQuery);
//         sql.connect(config, function(err) {
//             if (err) {
//                 console.log(err);
//             }
//             var request = new sql.Request();
//             request.query(strQuery, function(err, result) {

//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(result.recordset);
//                 }

//             });
//         });
//     });
// }


// export default buscarGeneral;
// export default buscarId;
// export default altaEmpleado;