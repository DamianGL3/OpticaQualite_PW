let indexarmazoneseleccionado;
let armazones = [];
cargarModuloCatalogoArmazon();

export function cargarModuloCatalogoArmazon() {
    document.getElementById('btnCatalogo').classList.remove("btn-light");
    document.getElementById('btnCatalogo').classList.add("btn-primary");
    document.getElementById('btnAgregar').classList.remove("btn-primary");
    document.getElementById('btnAgregar').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloArmazones/moduloRegistroArmazones/view_CatalogoArmazones.html")
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

export function cargarModuloRegistroArmazon() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnAgregar').classList.remove("btn-light");
    document.getElementById('btnAgregar').classList.add("btn-primary");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloArmazones/moduloRegistroArmazones/view_RegistroArmazones.html")
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

export function cargarModuloModificarArmazon() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-light");
    document.getElementById('btnModificar').classList.add("btn-primary");
    fetch("moduloArmazones/moduloRegistroArmazones/view_ModificarArmazones.html")
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



export function addArmazon() {
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
                    modelo,
                    existencias,
                    color,
                    dimensiones,
                    descripcion;



            nombre = document.getElementById("txtNombre").value;
            precio_cObtenido = document.getElementById("txtPrecioC").value;
            precio_vObtenido = document.getElementById("txtPrecioV").value;
            marca = document.getElementById("txtMarca").value;
            modelo = document.getElementById("txtModelo").value;
            existencias = document.getElementById("txtExistencias").value;
            color = document.getElementById("txtColor").value;
            dimensiones = document.getElementById("txtDimensiones").value;
            descripcion = document.getElementById("txtDescripcion").value;

            precio_c = "$" + precio_cObtenido;
            precio_v = "$" + precio_vObtenido;
            //form.submit();
            let armazon = {};

            armazon.nombre = nombre;
            armazon.precio_c = precio_c;
            armazon.precio_v = precio_v;
            armazon.marca = marca;
            armazon.modelo = modelo;
            armazon.existencias = existencias;
            armazon.color = color;
            armazon.dimensiones = dimensiones;
            armazon.descripcion = descripcion;
            armazon.estatus = "Activo";

            armazones.push(armazon);
            clean();
            notificacionAñadir();
        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })


}

export function loadTabla() {
    let cuerpo = "";
    armazones.forEach(function (armazon) {
        let registro =
                '<tr id="' + armazones.indexOf(armazon) + '"class="" onclick="moduloArmazones.selectArmazon(' + armazones.indexOf(armazon) + ');">' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precio_c + '</td>' +
                '<td>' + armazon.precio_v + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblArmazon").innerHTML = cuerpo;
}


let txtNombre;
let txtPrecioC;
let txtPrecioV;
let txtEstatus;
let txtMarca;
let txtModelo;
let txtExistencias;
let txtColor;
let txtDimensiones;
let txtDescripcion;


export function selectArmazon(index) {

    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");


    txtNombre = armazones[index].nombre;
    txtPrecioC = armazones[index].precio_c;
    txtPrecioV = armazones[index].precio_v;
    txtEstatus = armazones[index].estatus;
    txtMarca = armazones[index].marca;
    txtModelo = armazones[index].modelo;
    txtExistencias = armazones[index].existencias;
    txtColor = armazones[index].color;
    txtDimensiones = armazones[index].dimensiones;
    txtDescripcion = armazones[index].descripcion;
    indexarmazoneseleccionado = index;

    document.getElementById(indexarmazoneseleccionado).classList.add("bg-claro");
    temporizadorDeRetraso();
}

let identificadorTiempoDeEspera;

function temporizadorDeRetraso() {
    identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
    document.getElementById(indexarmazoneseleccionado).classList.remove("bg-claro");
}
//sirve para limpiar 
export function clean() {
    document.getElementById("txtNombre").value = " ";
    document.getElementById("txtPrecioC").value = " ";
    document.getElementById("txtPrecioV").value = " ";
    document.getElementById("txtMarca").value = " ";
    document.getElementById("txtModelo").value = " ";
    document.getElementById("txtExistencias").value = " ";
    document.getElementById("txtColor").value = " ";
    document.getElementById("txtDimensiones").value = " ";
    document.getElementById("txtDescripcion").value = " ";

    document.getElementById("txtNombre").focus();
    indexarmazoneseleccionado = 0;
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
    document.getElementById("txtModelo").value = txtModelo;
    document.getElementById("txtExistencias").value = txtExistencias;
    document.getElementById("txtColor").value = txtColor;
    document.getElementById("txtDimensiones").value = txtDimensiones;
    document.getElementById("txtDescripcion").value = txtDescripcion;
    document.getElementById("txtEstatus").value = txtEstatus;
    document.getElementById("txtNombre").focus();
}



export function updateArmazon() {
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
                    modelo,
                    existencias,
                    color,
                    dimensiones,
                    descripcion,
                    estatus;



            nombre = document.getElementById("txtNombre").value;
            precio_cObtenido = document.getElementById("txtPrecioC").value;
            precio_vObtenido = document.getElementById("txtPrecioV").value;
            marca = document.getElementById("txtMarca").value;
            modelo = document.getElementById("txtModelo").value;
            existencias = document.getElementById("txtExistencias").value;
            color = document.getElementById("txtColor").value;
            dimensiones = document.getElementById("txtDimensiones").value;
            descripcion = document.getElementById("txtDescripcion").value;
            estatus = document.getElementById("txtEstatus").value;

            precio_c = "$" + precio_cObtenido;
            precio_v = "$" + precio_vObtenido;

            let armazon = {};

            armazon.nombre = nombre;
            armazon.precio_c = precio_c;
            armazon.precio_v = precio_v;
            armazon.marca = marca;
            armazon.modelo = modelo;
            armazon.existencias = existencias;
            armazon.color = color;
            armazon.dimensiones = dimensiones;
            armazon.descripcion = descripcion;
            armazon.estatus = estatus;

            armazones[indexarmazoneseleccionado] = armazon;
            clean();
            notificacionActualización();
        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })


}

export function deleteArmazon() {
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

            armazones[indexarmazoneseleccionado].estatus = "Inactivo";
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

fetch("moduloArmazones/data_Armazones.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            armazones = jsondata;
            loadTabla();
        }
        );


export function searchArmazon() {
    let filtro = document.getElementById("txtBuscarArmazon").value;
    let resultadosNombre = armazones.filter(element => element.nombre === filtro);
    let resultadosMarca = armazones.filter(element => element.marca === filtro);
    let resultadosModelo = armazones.filter(element => element.modelo === filtro);
    let resultadosColor = armazones.filter(element => element.color === filtro);
    let resultadosDescripcion = armazones.filter(element => element.descripcion === filtro);
    let resultadosDimensiones = armazones.filter(element => element.dimensiones === filtro);
    let resultadosExistencias = armazones.filter(element => element.existencias === filtro);
    let resultadosPrecioC = armazones.filter(element => element.precio_c === filtro);
    let resultadosPrecioV = armazones.filter(element => element.precio_v === filtro);
    let resultadosEstatus = armazones.filter(element => element.estatus === filtro);

    let cuerpo = "";
    
    resultadosDimensiones.forEach(function (armazon) {
        let registro =
                '<tr id="' + armazones.indexOf(armazon) + '"class="" onclick="moduloArmazones.selectArmazon(' + armazones.indexOf(armazon) + ');">' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precio_c + '</td>' +
                '<td>' + armazon.precio_v + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td></tr>';
        cuerpo += registro;
    });
    
    resultadosExistencias.forEach(function (armazon) {
        let registro =
                '<tr id="' + armazones.indexOf(armazon) + '"class="" onclick="moduloArmazones.selectArmazon(' + armazones.indexOf(armazon) + ');">' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precio_c + '</td>' +
                '<td>' + armazon.precio_v + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td></tr>';
        cuerpo += registro;
    });
    
    resultadosDescripcion.forEach(function (armazon) {
        let registro =
                '<tr id="' + armazones.indexOf(armazon) + '"class="" onclick="moduloArmazones.selectArmazon(' + armazones.indexOf(armazon) + ');">' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precio_c + '</td>' +
                '<td>' + armazon.precio_v + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td></tr>';
        cuerpo += registro;
    });
    
    resultadosColor.forEach(function (armazon) {
        let registro =
                '<tr id="' + armazones.indexOf(armazon) + '"class="" onclick="moduloArmazones.selectArmazon(' + armazones.indexOf(armazon) + ');">' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precio_c + '</td>' +
                '<td>' + armazon.precio_v + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td></tr>';
        cuerpo += registro;
    });
    
    resultadosModelo.forEach(function (armazon) {
        let registro =
                '<tr id="' + armazones.indexOf(armazon) + '"class="" onclick="moduloArmazones.selectArmazon(' + armazones.indexOf(armazon) + ');">' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precio_c + '</td>' +
                '<td>' + armazon.precio_v + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td></tr>';
        cuerpo += registro;
    });
    
    resultadosMarca.forEach(function (armazon) {
        let registro =
                '<tr id="' + armazones.indexOf(armazon) + '"class="" onclick="moduloArmazones.selectArmazon(' + armazones.indexOf(armazon) + ');">' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precio_c + '</td>' +
                '<td>' + armazon.precio_v + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td></tr>';
        cuerpo += registro;
    });
    
    resultadosNombre.forEach(function (armazon) {
        let registro =
                '<tr id="' + armazones.indexOf(armazon) + '"class="" onclick="moduloArmazones.selectArmazon(' + armazones.indexOf(armazon) + ');">' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precio_c + '</td>' +
                '<td>' + armazon.precio_v + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosPrecioC.forEach(function (armazon) {
        let registro =
                '<tr id="' + armazones.indexOf(armazon) + '"class="" onclick="moduloArmazones.selectArmazon(' + armazones.indexOf(armazon) + ');">' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precio_c + '</td>' +
                '<td>' + armazon.precio_v + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosPrecioV.forEach(function (armazon) {
        let registro =
                '<tr id="' + armazones.indexOf(armazon) + '"class="" onclick="moduloArmazones.selectArmazon(' + armazones.indexOf(armazon) + ');">' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precio_c + '</td>' +
                '<td>' + armazon.precio_v + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td></tr>';
        cuerpo += registro;
    });



    resultadosEstatus.forEach(function (armazon) {
        let registro =
                '<tr id="' + armazones.indexOf(armazon) + '"class="" onclick="moduloArmazones.selectArmazon(' + armazones.indexOf(armazon) + ');">' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + "X" + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precio_c + '</td>' +
                '<td>' + armazon.precio_v + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblArmazon").innerHTML = cuerpo;
}

function notificacionEliminacion() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha eliminado correctamente!',
                position: 'center',showConfirmButton: false,
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

