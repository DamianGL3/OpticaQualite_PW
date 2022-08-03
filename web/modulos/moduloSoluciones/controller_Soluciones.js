let indexSolucionSeleccionado;
let soluciones = [];
cargarModuloCatalogoSoluciones();

export function cargarModuloCatalogoSoluciones() {
    document.getElementById('btnCatalogo').classList.remove("btn-light");
    document.getElementById('btnCatalogo').classList.add("btn-primary");
    document.getElementById('btnAgregar').classList.remove("btn-primary");
    document.getElementById('btnAgregar').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloSoluciones/moduloRegistroSolucion/view_CatalogoSolucion.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedor-modulo").innerHTML = html;
                        loadTabla();

                    }
            );
}

export function cargarModuloRegistroSoluciones() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnAgregar').classList.remove("btn-light");
    document.getElementById('btnAgregar').classList.add("btn-primary");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloSoluciones/moduloRegistroSolucion/view_RegistroSolucion.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedor-modulo").innerHTML = html;

                    }
            );
}

export function cargarModuloModificarSoluciones() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-light");
    document.getElementById('btnModificar').classList.add("btn-primary");
    fetch("moduloSoluciones/moduloRegistroSolucion/view_ModificarSolucion.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedor-modulo").innerHTML = html;
                        leerDatos();
                    }
            );
}

export function boton() {
    document.getElementById("btnAgregar").classList.remove("disabled");
    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");

}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);


}



export function addSolucion() {
    Swal.fire({
        title: 'Estás seguro de guardar los cambios?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Guardar',
        denyButtonText: `No Guardar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')

            let  nombre,
                    marca,
                    dimensiones,
                    precio_c,
                    precio_v,
                    descripcion,
                    existencias,
                    precio_cObtenido,
                    precio_vObtenido,
                    existenciasObtenido;


            nombre = document.getElementById("txtNombre").value;
            marca = document.getElementById("txtMarca").value;
            dimensiones = document.getElementById("txtDimensiones").value;
            precio_cObtenido = document.getElementById("txtPrecioC").value;
            precio_vObtenido = document.getElementById("txtPrecioV").value;
            descripcion = document.getElementById("txtDescripcion").value;
            existenciasObtenido = document.getElementById("txtExistencia").value;
            precio_c = "$" + precio_cObtenido;
            precio_v = "$" + precio_vObtenido;
            existencias = existenciasObtenido + " pz";

            //form.submit();
            let solucion = {};

            solucion.nombre = nombre;
            solucion.marca = marca;
            solucion.dimensiones = dimensiones;
            solucion.precio_c = precio_c;
            solucion.precio_v = precio_v;
            solucion.descripcion = descripcion;
            solucion.existencias = existencias;

            solucion.estatus = "Activo";
            soluciones.push(solucion);
            clean();
            notificacionAñadir();

        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })




}

export function loadTabla() {
    let cuerpo = "";
    soluciones.forEach(function (solucion) {
        let registro =
                '<tr id="' + soluciones.indexOf(solucion) + '"class="" onclick="moduloSolucion.selectSolucion(' + soluciones.indexOf(solucion) + ');">' +
                '<td>' + solucion.nombre + '</td>' +
                '<td>' + solucion.marca + '</td>' +
                '<td>' + solucion.dimensiones + '</td>' +
                '<td>' + solucion.precio_c + '</td>' +
                '<td>' + solucion.precio_v + '</td>' +
                '<td>' + solucion.descripcion + '</td>' +
                '<td>' + solucion.existencias + '</td>' +
                '<td>' + solucion.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblSoluciones").innerHTML = cuerpo;
}


let txtNombre;
let txtMarca;
let txtDimensiones;
let txtPrecioC;
let txtPrecioV;
let txtDescripcion;
let txtExistencia;
let txtEstatus;

export function selectSolucion(index) {

    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");


    txtNombre = soluciones[index].nombre;
    txtMarca = soluciones[index].marca;
    txtDimensiones = soluciones[index].dimensiones;
    txtPrecioC = soluciones[index].precio_c;
    txtPrecioV = soluciones[index].precio_v;
    txtDescripcion = soluciones[index].descripcion;
    txtExistencia = soluciones[index].existencias;
    txtEstatus = soluciones[index].estatus;
    indexSolucionSeleccionado = index;

    document.getElementById(indexSolucionSeleccionado).classList.add("bg-claro");
    temporizadorDeRetraso();
}

let identificadorTiempoDeEspera;

function temporizadorDeRetraso() {
    identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
    document.getElementById(indexSolucionSeleccionado).classList.remove("bg-claro");
}
//sirve para limpiar 
export function clean() {

    document.getElementById("txtNombre").value = " ";
    document.getElementById("txtMarca").value = " ";
    document.getElementById("txtDimensiones").value = " ";
    document.getElementById("txtPrecioC").value = " ";
    document.getElementById("txtPrecioV").value = " ";
    document.getElementById("txtDescripcion").value = " ";
    document.getElementById("txtExistencia").value = " ";

    document.getElementById("txtNombre").focus();
    indexSolucionSeleccionado = 0;
}

export function leerDatos(index) {
    let newPrecioC1 = txtPrecioC;
    let newPrecioC2 = newPrecioC1.slice(1);

    let newPrecioV1 = txtPrecioV;
    let newPrecioV2 = newPrecioV1.slice(1);

    let newEstatusV1 = txtExistencia;
    let newEstatusV2 = newEstatusV1.slice(0, -3);

    //Habilita las casillas
    document.getElementById("txtNombre").disabled = false;
    document.getElementById("txtMarca").disabled = false;
    document.getElementById("txtDimensiones").disabled = false;
    document.getElementById("txtPrecioC").disabled = false;
    document.getElementById("txtPrecioV").disabled = false;
    document.getElementById("txtDescripcion").disabled = false;
    document.getElementById("txtExistencia").disabled = false;
    document.getElementById("txtEstatus").disabled = false;
    //Lee los datos

    document.getElementById("txtNombre").value = txtNombre;
    document.getElementById("txtMarca").value = txtMarca;
    document.getElementById("txtDimensiones").value = txtDimensiones;
    document.getElementById("txtPrecioC").value = newPrecioC2;
    document.getElementById("txtPrecioV").value = newPrecioV2;
    document.getElementById("txtDescripcion").value = txtDescripcion;
    document.getElementById("txtExistencia").value = newEstatusV2;
    document.getElementById("txtEstatus").value = txtEstatus;
    document.getElementById("txtNombre").focus();
    getHash();
}



export function updateSolucion() {
    Swal.fire({
        title: 'Estás seguro de guardar los cambios?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Guardar',
        denyButtonText: `No Guardar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
            let  nombre,
                    marca,
                    dimensiones,
                    precio_c,
                    precio_v,
                    descripcion,
                    estatus,
                    existencias,
                    precio_cObtenido,
                    precio_vObtenido,
                    existenciasObtenido;


            nombre = document.getElementById("txtNombre").value;
            marca = document.getElementById("txtMarca").value;
            dimensiones = document.getElementById("txtDimensiones").value;
            precio_cObtenido = document.getElementById("txtPrecioC").value;
            precio_vObtenido = document.getElementById("txtPrecioV").value;
            descripcion = document.getElementById("txtDescripcion").value;
            existenciasObtenido = document.getElementById("txtExistencia").value;
            precio_c = "$" + precio_cObtenido;
            precio_v = "$" + precio_vObtenido;
            existencias = existenciasObtenido + " pz";

            estatus = document.getElementById("txtEstatus").value;

            let solucion = {};

            solucion.nombre = nombre;
            solucion.marca = marca;
            solucion.dimensiones = dimensiones;
            solucion.precio_c = precio_c;
            solucion.precio_v = precio_v;
            solucion.descripcion = descripcion;
            solucion.existencias = existencias;
            solucion.estatus = estatus;
            soluciones[indexSolucionSeleccionado] = solucion;
            clean();
            notificacionActualización();
        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })



}

export function deleteSolucion() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminalo!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                    'Eliminado!',
                    'Tú registro se ha eliminado.',
                    'success'
                    );

            soluciones[indexSolucionSeleccionado].estatus = "Inactivo";
            loadTabla();
        } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
                ) {
            swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Tú eliminación se ha cancelado!.',
                    'error'
                    );
        }
    });
}

fetch("moduloSoluciones/data_Soluciones.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            soluciones = jsondata;
            loadTabla();
        }
        );


export function searchSolucion() {
    let filtro = document.getElementById("txtBuscarSolucion").value;
    let resultadosNombre = soluciones.filter(element => element.nombre === filtro);
    let resultadosMarca = soluciones.filter(element => element.marca === filtro);
    let resultadosDimensiones = soluciones.filter(element => element.dimensiones === filtro);
    let resultadosPrecioC = soluciones.filter(element => element.precio_c === filtro);
    let resultadosPrecioV = soluciones.filter(element => element.precio_v === filtro);
    let resultadosDescripcion = soluciones.filter(element => element.descripcion === filtro);
    let resultadosExistencias = soluciones.filter(element => element.existencias === filtro);
    let resultadosEstatus = soluciones.filter(element => element.estatus === filtro);

    let cuerpo = "";

    resultadosNombre.forEach(function (solucion) {
        let registro =
                '<tr onclick="moduloSolucion.selectSolucion(' + soluciones.indexOf(solucion) + ');">' +
                '<td>' + solucion.nombre + '</td>' +
                '<td>' + solucion.marca + '</td>' +
                '<td>' + solucion.dimensiones + '</td>' +
                '<td>' + solucion.precio_c + '</td>' +
                '<td>' + solucion.precio_v + '</td>' +
                '<td>' + solucion.descripcion + '</td>' +
                '<td>' + solucion.existencias + '</td>' +
                '<td>' + solucion.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosMarca.forEach(function (solucion) {
        let registro =
                '<tr onclick="moduloSolucion.selectSolucion(' + soluciones.indexOf(solucion) + ');">' +
                '<td>' + solucion.nombre + '</td>' +
                '<td>' + solucion.marca + '</td>' +
                '<td>' + solucion.dimensiones + '</td>' +
                '<td>' + solucion.precio_c + '</td>' +
                '<td>' + solucion.precio_v + '</td>' +
                '<td>' + solucion.descripcion + '</td>' +
                '<td>' + solucion.existencias + '</td>' +
                '<td>' + solucion.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosDimensiones.forEach(function (solucion) {
        let registro =
                '<tr onclick="moduloSolucion.selectSolucion(' + soluciones.indexOf(solucion) + ');">' +
                '<td>' + solucion.nombre + '</td>' +
                '<td>' + solucion.marca + '</td>' +
                '<td>' + solucion.dimensiones + '</td>' +
                '<td>' + solucion.precio_c + '</td>' +
                '<td>' + solucion.precio_v + '</td>' +
                '<td>' + solucion.descripcion + '</td>' +
                '<td>' + solucion.existencias + '</td>' +
                '<td>' + solucion.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosPrecioC.forEach(function (solucion) {
        let registro =
                '<tr onclick="moduloSolucion.selectSolucion(' + soluciones.indexOf(solucion) + ');">' +
                '<td>' + solucion.nombre + '</td>' +
                '<td>' + solucion.marca + '</td>' +
                '<td>' + solucion.dimensiones + '</td>' +
                '<td>' + solucion.precio_c + '</td>' +
                '<td>' + solucion.precio_v + '</td>' +
                '<td>' + solucion.descripcion + '</td>' +
                '<td>' + solucion.existencias + '</td>' +
                '<td>' + solucion.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosPrecioV.forEach(function (solucion) {
        let registro =
                '<tr onclick="moduloSolucion.selectSolucion(' + soluciones.indexOf(solucion) + ');">' +
                '<td>' + solucion.nombre + '</td>' +
                '<td>' + solucion.marca + '</td>' +
                '<td>' + solucion.dimensiones + '</td>' +
                '<td>' + solucion.precio_c + '</td>' +
                '<td>' + solucion.precio_v + '</td>' +
                '<td>' + solucion.descripcion + '</td>' +
                '<td>' + solucion.existencias + '</td>' +
                '<td>' + solucion.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosDescripcion.forEach(function (solucion) {
        let registro =
                '<tr onclick="moduloSolucion.selectSolucion(' + soluciones.indexOf(solucion) + ');">' +
                '<td>' + solucion.nombre + '</td>' +
                '<td>' + solucion.marca + '</td>' +
                '<td>' + solucion.dimensiones + '</td>' +
                '<td>' + solucion.precio_c + '</td>' +
                '<td>' + solucion.precio_v + '</td>' +
                '<td>' + solucion.descripcion + '</td>' +
                '<td>' + solucion.existencias + '</td>' +
                '<td>' + solucion.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosEstatus.forEach(function (solucion) {
        let registro =
                '<tr onclick="moduloSolucion.selectSolucion(' + soluciones.indexOf(solucion) + ');">' +
                '<td>' + solucion.nombre + '</td>' +
                '<td>' + solucion.marca + '</td>' +
                '<td>' + solucion.dimensiones + '</td>' +
                '<td>' + solucion.precio_c + '</td>' +
                '<td>' + solucion.precio_v + '</td>' +
                '<td>' + solucion.descripcion + '</td>' +
                '<td>' + solucion.existencias + '</td>' +
                '<td>' + solucion.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosExistencias.forEach(function (solucion) {
        let registro =
                '<tr onclick="moduloSolucion.selectSolucion(' + soluciones.indexOf(solucion) + ');">' +
                '<td>' + solucion.nombre + '</td>' +
                '<td>' + solucion.marca + '</td>' +
                '<td>' + solucion.dimensiones + '</td>' +
                '<td>' + solucion.precio_c + '</td>' +
                '<td>' + solucion.precio_v + '</td>' +
                '<td>' + solucion.descripcion + '</td>' +
                '<td>' + solucion.existencias + '</td>' +
                '<td>' + solucion.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblSoluciones").innerHTML = cuerpo;
}

function notificacionEliminacion() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha eliminado correctamente!',
        showConfirmButton: false,
        timer: 1500
    })
}

function notificacionActualización() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha modificado correctamente!',
        showConfirmButton: false,
        timer: 1500
    })
}

function notificacionAñadir() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha añadido correctamente!',
        showConfirmButton: false,
        timer: 1500
    })
}

