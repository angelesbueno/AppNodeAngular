const sql = require('mssql');

const config = 'mssql://sa:P@ssw0rd01@127.0.0.1/EMPRESA2';

// QUERY SEARCH GENERAL
export function buscarGeneral(general) {
    sql.close();

    let campo = general.campo.toUpperCase();
    let busqueda = general.busqueda;

    return new Promise((resolve, reject) => {

        let strQuery = `SELECT * FROM EMPLEADOS WHERE ${campo} LIKE '${busqueda}'`;
        console.log(strQuery);
        sql.connect(config, function(err) {
            if (err) {
                console.log(err);
            }
            var request = new sql.Request();
            request.query(strQuery, function(err, result) {

                if (err) {
                    reject(err);
                } else {
                    resolve(result.recordset);
                }

            });
        });
    });

}

// QUERY SEARCH ID
export function buscarId(id) {
    sql.close();
    return new Promise((resolve, reject) => {
        var strQuery = "SELECT * FROM EMPLEADOS WHERE ID='" + id + "'";
        console.log(strQuery);
        sql.connect(config, function(err) {
            if (err) {
                console.log(err);
            }
            var request = new sql.Request();
            request.query(strQuery, function(err, result) {

                if (err) {
                    reject(err);
                } else {
                    resolve(result.recordset);
                }

            });
        });
    });
};


// QUERY NEW EMP
export function altaEmpleado(data) {
    sql.close();
    return new Promise((resolve, reject) => {
        var strQuery = `INSERT INTO EMPLEADOS (NOMBRE, APELLIDO1, APELLIDO2, DIRECCION, CP, POBLACION, PROVINCIA, TELEFONO, EMAIL)
                                        VALUES ('${data.nombre}', '${data.apellido1}', '${data.apellido2}', '${data.direccion}', '${data.cp}', '${data.poblacion}', '${data.provincia}', '${data.telefono}', '${data.email}')`;
        //console.log(strQuery);
        sql.connect(config, function(err) {
            if (err) {
                console.log(err);
            }
            var request = new sql.Request();
            request.query(strQuery, function(err, result) {

                if (err) {
                    reject(err);
                } else {
                    resolve(result.recordset);
                }

            });
        });
    });
}

// QUERY SHOW ALL EMP
export function listaEmp() {
    sql.close();
    return new Promise((resolve, reject) => {
        var strQuery = 'SELECT * FROM EMPLEADOS';
        sql.connect(config, function(err) {
            if (err) {
                console.log(err);
            }
            var request = new sql.Request();
            request.query(strQuery, function(err, result) {

                if (err) {
                    reject(err);
                } else {
                    resolve(result.recordset);
                }
            });
        });
    });
}