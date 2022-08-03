let indexaccesorioseleccionado;
let accesorios = [];
cargarModuloCatalogoAccesorios();

export function cargarModuloCatalogoAccesorios() {
    document.getElementById('btnCatalogo').classList.remove("btn-light");
    document.getElementById('btnCatalogo').classList.add("btn-primary");
    document.getElementById('btnAgregar').classList.remove("btn-primary");
    document.getElementById('btnAgregar').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloAccesorios/moduloRegistroAccesorios/view_CatalogoAccesorios.html")
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

export function cargarModuloRegistroAccesorios() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnAgregar').classList.remove("btn-light");
    document.getElementById('btnAgregar').classList.add("btn-primary");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloAccesorios/moduloRegistroAccesorios/view_RegistroAccesorios.html")
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

export function cargarModuloModificarAccesorios() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-light");
    document.getElementById('btnModificar').classList.add("btn-primary");
    fetch("moduloAccesorios/moduloRegistroAccesorios/view_ModificarAccesorios.html")
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



export function addAccesorio() {
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
                    precio_c,
                    precio_v,
                    precio_cObtenido,
                    precio_vObtenido,
                    marca,
                    existencias;



            nombre = document.getElementById("txtNombre").value;
            precio_cObtenido = document.getElementById("txtPrecioC").value;
            precio_vObtenido = document.getElementById("txtPrecioV").value;
            marca = document.getElementById("txtMarca").value;
            existencias = document.getElementById("txtExistencias").value;

            precio_c = "$" + precio_cObtenido;
            precio_v = "$" + precio_vObtenido;
            //form.submit();
            let accesorio = {};

            accesorio.nombre = nombre;
            accesorio.precio_c = precio_c;
            accesorio.precio_v = precio_v;
            accesorio.marca = marca;
            accesorio.existencias = existencias;
            accesorio.estatus = "Activo";

            accesorios.push(accesorio);
            clean();
            notificacionAñadir();
        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })


}

export function loadTabla() {
    let cuerpo = "";
    accesorios.forEach(function (accesorio) {
        let registro =
                '<tr id="' + accesorios.indexOf(accesorio) + '"class="" onclick="moduloAccesorios.selectAccesorio(' + accesorios.indexOf(accesorio) + ');">' +
                '<td>' + accesorio.nombre + '</td>' +
                '<td>' + accesorio.marca + '</td>' +
                '<td>' + accesorio.precio_c + '</td>' +
                '<td>' + accesorio.precio_v + '</td>' +
                '<td>' + accesorio.existencias + '</td>' +
                '<td>' + accesorio.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblAccesorio").innerHTML = cuerpo;
}


let txtNombre;
let txtPrecioC;
let txtPrecioV;
let txtEstatus;
let txtMarca;
let txtModelo;
let txtExistencias;


export function selectAccesorio(index) {

    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");


    txtNombre = accesorios[index].nombre;
    txtPrecioC = accesorios[index].precio_c;
    txtPrecioV = accesorios[index].precio_v;
    txtEstatus = accesorios[index].estatus;
    txtMarca = accesorios[index].marca;
    txtExistencias = accesorios[index].existencias;
    indexaccesorioseleccionado = index;

    document.getElementById(indexaccesorioseleccionado).classList.add("bg-claro");
    temporizadorDeRetraso();
}

let identificadorTiempoDeEspera;

function temporizadorDeRetraso() {
    identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
    document.getElementById(indexaccesorioseleccionado).classList.remove("bg-claro");
}
//sirve para limpiar 
export function clean() {
    document.getElementById("txtNombre").value = " ";
    document.getElementById("txtMarca").value = " ";
    document.getElementById("txtPrecioC").value = " ";
    document.getElementById("txtPrecioV").value = " ";
    document.getElementById("txtExistencias").value = " ";


    document.getElementById("txtNombre").focus();
    indexaccesorioseleccionado = 0;
}

export function leerDatos(index) {
    let newPrecioC1 = txtPrecioC;
    let newPrecioC2 = newPrecioC1.slice(1);

    let newPrecioV1 = txtPrecioV;
    let newPrecioV2 = newPrecioV1.slice(1);

    //Lee los datos

    document.getElementById("txtNombre").value = txtNombre;
    document.getElementById("txtPrecioC").value = newPrecioC2;
    document.getElementById("txtPrecioV").value = newPrecioV2;
    document.getElementById("txtMarca").value = txtMarca;
    document.getElementById("txtExistencias").value = txtExistencias;
    document.getElementById("txtEstatus").value = txtEstatus;
    document.getElementById("txtNombre").focus();
}



export function updateAccesorio() {
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
                    precio_c,
                    precio_v,
                    precio_cObtenido,
                    precio_vObtenido,
                    marca,
                    existencias,
                    estatus;



            nombre = document.getElementById("txtNombre").value;
            precio_cObtenido = document.getElementById("txtPrecioC").value;
            precio_vObtenido = document.getElementById("txtPrecioV").value;
            marca = document.getElementById("txtMarca").value;
            existencias = document.getElementById("txtExistencias").value;;
            estatus = document.getElementById("txtEstatus").value;

            precio_c = "$" + precio_cObtenido;
            precio_v = "$" + precio_vObtenido;

            let accesorio = {};

            accesorio.nombre = nombre;
            accesorio.precio_c = precio_c;
            accesorio.precio_v = precio_v;
            accesorio.marca = marca;
            accesorio.existencias = existencias;
            accesorio.estatus = estatus;

            accesorios[indexaccesorioseleccionado] = accesorio;
            clean();
            notificacionActualización();
        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })


}

export function deleteAccesorio() {
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

            accesorios[indexaccesorioseleccionado].estatus = "Inactivo";
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

fetch("moduloAccesorios/data_Accesorios.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            accesorios = jsondata;
            loadTabla();
        }
        );


export function searchAccesorio() {
    let filtro = document.getElementById("txtBuscarAccesorio").value;
    let resultadosNombre = accesorios.filter(element => element.nombre === filtro);
    let resultadosMarca = accesorios.filter(element => element.marca === filtro);
    let resultadosPrecioC = accesorios.filter(element => element.precio_c === filtro);
    let resultadosPrecioV = accesorios.filter(element => element.precio_v === filtro);
    let resultadosEstatus = accesorios.filter(element => element.estatus === filtro);
    let resultadosExistencias = accesorios.filter(element => element.existencias === filtro);

    let cuerpo = "";
    
    resultadosExistencias.forEach(function (accesorio) {
        let registro =
                '<tr id="' + accesorios.indexOf(accesorio) + '"class="" onclick="moduloAccesorios.selectAccesorio(' + accesorios.indexOf(accesorio) + ');">' +
                '<td>' + accesorio.nombre + '</td>' +
                '<td>' + accesorio.marca + '</td>' +
                '<td>' + accesorio.precio_c + '</td>' +
                '<td>' + accesorio.precio_v + '</td>' +
                '<td>' + accesorio.existencias + '</td>' +
                '<td>' + accesorio.estatus + '</td></tr>';
        cuerpo += registro;
    });
    
    
    resultadosMarca.forEach(function (accesorio) {
        let registro =
                '<tr id="' + accesorios.indexOf(accesorio) + '"class="" onclick="moduloAccesorios.selectAccesorio(' + accesorios.indexOf(accesorio) + ');">' +
                '<td>' + accesorio.nombre + '</td>' +
                '<td>' + accesorio.marca + '</td>' +
                '<td>' + accesorio.precio_c + '</td>' +
                '<td>' + accesorio.precio_v + '</td>' +
                '<td>' + accesorio.existencias + '</td>' +
                '<td>' + accesorio.estatus + '</td></tr>';
        cuerpo += registro;
    });
    
    resultadosNombre.forEach(function (accesorio) {
        let registro =
                '<tr id="' + accesorios.indexOf(accesorio) + '"class="" onclick="moduloAccesorios.selectAccesorio(' + accesorios.indexOf(accesorio) + ');">' +
                '<td>' + accesorio.nombre + '</td>' +
                '<td>' + accesorio.marca + '</td>' +
                '<td>' + accesorio.precio_c + '</td>' +
                '<td>' + accesorio.precio_v + '</td>' +
                '<td>' + accesorio.existencias + '</td>' +
                '<td>' + accesorio.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosPrecioC.forEach(function (accesorio) {
       let registro =
                '<tr id="' + accesorios.indexOf(accesorio) + '"class="" onclick="moduloAccesorios.selectAccesorio(' + accesorios.indexOf(accesorio) + ');">' +
                '<td>' + accesorio.nombre + '</td>' +
                '<td>' + accesorio.marca + '</td>' +
                '<td>' + accesorio.precio_c + '</td>' +
                '<td>' + accesorio.precio_v + '</td>' +
                '<td>' + accesorio.existencias + '</td>' +
                '<td>' + accesorio.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosPrecioV.forEach(function (accesorio) {
        let registro =
                '<tr id="' + accesorios.indexOf(accesorio) + '"class="" onclick="moduloAccesorios.selectAccesorio(' + accesorios.indexOf(accesorio) + ');">' +
                '<td>' + accesorio.nombre + '</td>' +
                '<td>' + accesorio.marca + '</td>' +
                '<td>' + accesorio.precio_c + '</td>' +
                '<td>' + accesorio.precio_v + '</td>' +
                '<td>' + accesorio.existencias + '</td>' +
                '<td>' + accesorio.estatus + '</td></tr>';
        cuerpo += registro;
    });



    resultadosEstatus.forEach(function (accesorio) {
        let registro =
                '<tr id="' + accesorios.indexOf(accesorio) + '"class="" onclick="moduloAccesorios.selectAccesorio(' + accesorios.indexOf(accesorio) + ');">' +
                '<td>' + accesorio.nombre + '</td>' +
                '<td>' + accesorio.marca + '</td>' +
                '<td>' + accesorio.precio_c + '</td>' +
                '<td>' + accesorio.precio_v + '</td>' +
                '<td>' + accesorio.existencias + '</td>' +
                '<td>' + accesorio.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblAccesorio").innerHTML = cuerpo;
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

