let indexExamenSeleccionado;
let examenes = [];
cargarModuloCatalogoExamenVista();

export function cargarModuloCatalogoExamenVista() {
    document.getElementById('btnCatalogo').classList.remove("btn-light");
    document.getElementById('btnCatalogo').classList.add("btn-primary");
    document.getElementById('btnAgregar').classList.remove("btn-primary");
    document.getElementById('btnAgregar').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloExamenVista/moduloRegistroExamenVista/view_CatalogoExamenVista.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedor-modulo").innerHTML = html;
                        loadTablaEx();
                    }
            );
}

export function cargarModuloRegistroExamenVista() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnAgregar').classList.remove("btn-light");
    document.getElementById('btnAgregar').classList.add("btn-primary");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloExamenVista/moduloRegistroExamenVista/view_RegistroExamenVista.html")
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

export function cargarModuloModificarExamenVista() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-light");
    document.getElementById('btnModificar').classList.add("btn-primary");
    fetch("moduloExamenVista/moduloRegistroExamenVista/view_ModificarExamenVistaa.html")
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



export function agregarExamen() {
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
            let
                    fecha,
                    hora,
                    clave_Cliente,
                    esferaD,
                    esferaI,
                    cilindroD,
                    cilindroI,
                    ejeD,
                    ejeI,
                    distanciaD,
                    distanciaI;


            fecha = document.getElementById("detFecha").value;
            hora = document.getElementById("txtHora").value;
            clave_Cliente = document.getElementById("txtClave").value;
            esferaD = document.getElementById("txtEsferaD").value;
            esferaI = document.getElementById("txtEsferaI").value;
            cilindroD = document.getElementById("txtCilindroD").value;
            cilindroI = document.getElementById("txtCilindroI").value;
            ejeD = document.getElementById("txtEjeD").value;
            ejeI = document.getElementById("txtEjeI").value;
            distanciaD = document.getElementById("txtDistanciaD").value;
            distanciaI = document.getElementById("txtDistanciaI").value;

            let date = new Date();
            let horaActu = date.toLocaleTimeString();

            //form.submit();
            let examen = {};
            examen.fecha = fecha;
            examen.hora = horaActu;
            examen.clave_Cliente = clave_Cliente;
            examen.esferaD = esferaD;
            examen.esferaI = esferaI;
            examen.cilindroD = cilindroD;
            examen.cilindroI = cilindroI;
            examen.ejeD = ejeD;
            examen.ejeI = ejeI;
            examen.distanciaD = distanciaD;
            examen.distanciaI = distanciaI;
            examenes.push(examen);
            clean();
            notificacionAñadir();
        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })


}

export function loadTablaEx() {
    let cuerpo = "";
    examenes.forEach(function (examen) {
        let registro =
                '<tr id="' + examenes.indexOf(examen) + '"class="" onclick="moduloExamenVista.seleccionarExamen(' + examenes.indexOf(examen) + ');">' +
                '<td>' + examen.fecha + '</td>' +
                '<td>' + examen.hora +
                '<td>' + examen.clave_Cliente + '</td>' +
                '<td>' + examen.esferaD + '</td>' +
                '<td>' + examen.esferaI + '</td>' +
                '<td>' + examen.cilindroD + '</td>' +
                '<td>' + examen.cilindroI + '</td>' +
                '<td>' + examen.ejeD + '</td>' +
                '<td>' + examen.ejeI + '</td>' +
                '<td>' + examen.distanciaD + '</td>' +
                '<td>' + examen.distanciaI + '</td></tr>';

        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblCExamen").innerHTML = cuerpo;
}

let txtId;
let detFecha;
let txtHora;
let txtClave;
let txtEsferaD;
let txtEsferaI;
let txtCilindroD;
let txtCilindroI;
let txtEjeD;
let txtEjeI;
let txtDistanciaD;
let txtDistanciaI;

export function seleccionarExamen(index) {
    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");


    detFecha = examenes[index].fecha;
    txtHora = examenes[index].hora;
    txtClave = examenes[index].clave_Cliente;
    txtEsferaD = examenes[index].esferaD;
    txtEsferaI = examenes[index].esferaI;
    txtCilindroD = examenes[index].cilindroD;
    txtCilindroI = examenes[index].cilindroI;
    txtEjeD = examenes[index].ejeD;
    txtEjeI = examenes[index].ejeI;
    txtDistanciaD = examenes[index].distanciaD;
    txtDistanciaI = examenes[index].distanciaI;
    indexExamenSeleccionado = index;

    document.getElementById(indexExamenSeleccionado).classList.add("bg-claro");
    temporizadorDeRetraso();
}

let identificadorTiempoDeEspera;

function temporizadorDeRetraso() {
    identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
    document.getElementById(indexExamenSeleccionado).classList.remove("bg-claro");
    document.getElementById('btnAgregar').classList.remove("disabled");
}

export function clean() {
    document.getElementById("detFecha").value = "";
    document.getElementById("txtHora").value = "";
    document.getElementById("txtClave").value = "";
    document.getElementById("txtEsferaD").value = "";
    document.getElementById("txtEsferaI").value = "";
    document.getElementById("txtCilindroD").value = "";
    document.getElementById("txtCilindroI").value = "";
    document.getElementById("txtEjeD").value = "";
    document.getElementById("txtEjeI").value = "";
    document.getElementById("txtDistanciaD").value = "";
    document.getElementById("txtDistanciaI").value = "";

    document.getElementById("detFecha").focus();
    indexExamenSeleccionado = 0;
}

export function leerDatos(index) {
    //Habilita las casillas

    document.getElementById("detFecha").disabled = false;
    document.getElementById("txtHora").disabled = false;
    document.getElementById("txtClave").disabled = false;
    document.getElementById("txtEsferaD").disabled = false;
    document.getElementById("txtEsferaI").disabled = false;
    document.getElementById("txtCilindroD").disabled = false;
    document.getElementById("txtCilindroI").disabled = false;
    document.getElementById("txtEjeD").disabled = false;
    document.getElementById("txtEjeI").disabled = false;
    document.getElementById("txtDistanciaD").disabled = false;
    document.getElementById("txtDistanciaI").disabled = false;
    //Lee los datos

    document.getElementById("detFecha").value = detFecha;
    document.getElementById("txtHora").value = txtHora;
    document.getElementById("txtClave").value = txtClave;
    document.getElementById("txtEsferaD").value = txtEsferaD;
    document.getElementById("txtEsferaI").value = txtEsferaI;
    document.getElementById("txtCilindroD").value = txtCilindroD;
    document.getElementById("txtCilindroI").value = txtCilindroI;
    document.getElementById("txtEjeD").value = txtEjeD;
    document.getElementById("txtEjeI").value = txtEjeI;
    document.getElementById("txtDistanciaD").value = txtDistanciaD;
    document.getElementById("txtDistanciaI").value = txtDistanciaI;
    document.getElementById("detFecha").focus();

}



export function actualizarExamen() {

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

            let
                    fecha,
                    hora,
                    clave_Cliente,
                    esferaD,
                    esferaI,
                    cilindroD,
                    cilindroI,
                    ejeD,
                    ejeI,
                    distanciaD,
                    distanciaI;


            fecha = document.getElementById("detFecha").value;
            hora = document.getElementById("txtHora").value;
            clave_Cliente = document.getElementById("txtClave").value;
            esferaD = document.getElementById("txtEsferaD").value;
            esferaI = document.getElementById("txtEsferaI").value;
            cilindroD = document.getElementById("txtCilindroD").value;
            cilindroI = document.getElementById("txtCilindroI").value;
            ejeD = document.getElementById("txtEjeD").value;
            ejeI = document.getElementById("txtEjeI").value;
            distanciaD = document.getElementById("txtDistanciaD").value;
            distanciaI = document.getElementById("txtDistanciaI").value;



            //form.submit();
            let examen = {};
            examen.fecha = fecha;
            examen.hora = hora;
            examen.clave_Cliente = clave_Cliente;
            examen.esferaD = esferaD;
            examen.esferaI = esferaI;
            examen.cilindroD = cilindroD;
            examen.cilindroI = cilindroI;
            examen.ejeD = ejeD;
            examen.ejeI = ejeI;
            examen.distanciaD = distanciaD;
            examen.distanciaI = distanciaI;
            examenes[indexExamenSeleccionado] = examen;
            clean();
            notificacionActualización();
        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })


}

export function eliminarExamen() {
    (async () => {

        const {value: password} = await Swal.fire({
            title: 'Confirme su identidad',
            input: 'password',
            inputLabel: 'Ingrese la contraseña para confirmar y eliminar el registro',
            inputPlaceholder: 'Ingrese su contraseña',
            inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off'
            }
        })

        if (password == "1234") {
            delete(examenes[indexExamenSeleccionado]);
            loadTablaEx();
            notificacionEliminacion();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La contraseña es incorrecta!',
            })
        }

    })()
}

fetch("moduloExamenVista/data_ExamenVista.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            examenes = jsondata;
            console.log(examenes);
            loadTablaEx();
        }
        );


export function buscarExamen() {
    let filtro = document.getElementById("txtBuscarExamen").value;
    let resultadosFecha = examenes.filter(element => element.fecha === filtro);
    let resultadosHora = examenes.filter(element => element.hora === filtro);
    let resultadosClave = examenes.filter(element => element.clave_Cliente === filtro);
    let resultadosEsferaD = examenes.filter(element => element.esferaD === filtro);
    let resultadosCilindroD = examenes.filter(element => element.cilindroD === filtro);
    let resultadosEjeD = examenes.filter(element => element.ejeD === filtro);
    let resultadosDistanciaD = examenes.filter(element => element.distanciaD === filtro);
    let resultadosEsferaI = examenes.filter(element => element.esferaI === filtro);
    let resultadosCilindroI = examenes.filter(element => element.cilindroI === filtro);
    let resultadosEjeI = examenes.filter(element => element.ejeI === filtro);
    let resultadosDistanciaI = examenes.filter(element => element.distanciaI === filtro);


    let cuerpo = "";

    resultadosFecha.forEach(function (examen) {
        let registro =
                '<tr onclick="moduloExamenVista.selectCliente(' + examenes.indexOf(examen) + ');">' +
                '<td>' + examen.fecha + '</td>' +
                '<td>' + examen.hora + '</td>' +
                '<td>' + examen.clave_Cliente + '</td>' +
                '<td>' + examen.esferaD + '</td>' +
                '<td>' + examen.esferaI + '</td>' +
                '<td>' + examen.cilindroD + '</td>' +
                '<td>' + examen.cilindroI + '</td>' +
                '<td>' + examen.ejeD + '</td>' +
                '<td>' + examen.ejeI + '</td>' +
                '<td>' + examen.distanciaD + '</td> ' +
                '<td>' + examen.distanciaI + '</td></tr>';
        cuerpo += registro;
    });

    resultadosHora.forEach(function (examen) {
        let registro =
                '<tr onclick="moduloExamenVista.selectCliente(' + examenes.indexOf(examen) + ');">' +
                '<td>' + examen.fecha + '</td>' +
                '<td>' + examen.hora + '</td>' +
                '<td>' + examen.clave_Cliente + '</td>' +
                '<td>' + examen.esferaD + '</td>' +
                '<td>' + examen.esferaI + '</td>' +
                '<td>' + examen.cilindroD + '</td>' +
                '<td>' + examen.cilindroI + '</td>' +
                '<td>' + examen.ejeD + '</td>' +
                '<td>' + examen.ejeI + '</td>' +
                '<td>' + examen.distanciaD + '</td> ' +
                '<td>' + examen.distanciaI + '</td></tr>';
        ;
        cuerpo += registro;
    });

    resultadosClave.forEach(function (examen) {
        let registro =
                '<tr onclick="moduloExamenVista.selectCliente(' + examenes.indexOf(examen) + ');">' +
                '<td>' + examen.fecha + '</td>' +
                '<td>' + examen.hora + '</td>' +
                '<td>' + examen.clave_Cliente + '</td>' +
                '<td>' + examen.esferaD + '</td>' +
                '<td>' + examen.esferaI + '</td>' +
                '<td>' + examen.cilindroD + '</td>' +
                '<td>' + examen.cilindroI + '</td>' +
                '<td>' + examen.ejeD + '</td>' +
                '<td>' + examen.ejeI + '</td>' +
                '<td>' + examen.distanciaD + '</td> ' +
                '<td>' + examen.distanciaI + '</td></tr>';
        cuerpo += registro;
    });

    resultadosEsferaD.forEach(function (examen) {
        let registro =
                '<tr onclick="moduloExamenVista.selectCliente(' + examenes.indexOf(examen) + ');">' +
                '<td>' + examen.fecha + '</td>' +
                '<td>' + examen.hora + '</td>' +
                '<td>' + examen.clave_Cliente + '</td>' +
                '<td>' + examen.esferaD + '</td>' +
                '<td>' + examen.esferaI + '</td>' +
                '<td>' + examen.cilindroD + '</td>' +
                '<td>' + examen.cilindroI + '</td>' +
                '<td>' + examen.ejeD + '</td>' +
                '<td>' + examen.ejeI + '</td>' +
                '<td>' + examen.distanciaD + '</td> ' +
                '<td>' + examen.distanciaI + '</td></tr>';
        cuerpo += registro;
    });

    resultadosCilindroD.forEach(function (examen) {
        let registro =
                '<tr onclick="moduloExamenVista.selectCliente(' + examenes.indexOf(examen) + ');">' +
                '<td>' + examen.fecha + '</td>' +
                '<td>' + examen.hora + '</td>' +
                '<td>' + examen.clave_Cliente + '</td>' +
                '<td>' + examen.esferaD + '</td>' +
                '<td>' + examen.esferaI + '</td>' +
                '<td>' + examen.cilindroD + '</td>' +
                '<td>' + examen.cilindroI + '</td>' +
                '<td>' + examen.ejeD + '</td>' +
                '<td>' + examen.ejeI + '</td>' +
                '<td>' + examen.distanciaD + '</td> ' +
                '<td>' + examen.distanciaI + '</td></tr>';
        cuerpo += registro;
    });

    resultadosEjeD.forEach(function (examen) {
        let registro =
                '<tr onclick="moduloExamenVista.selectCliente(' + examenes.indexOf(examen) + ');">' +
                '<td>' + examen.fecha + '</td>' +
                '<td>' + examen.hora + '</td>' +
                '<td>' + examen.clave_Cliente + '</td>' +
                '<td>' + examen.esferaD + '</td>' +
                '<td>' + examen.esferaI + '</td>' +
                '<td>' + examen.cilindroD + '</td>' +
                '<td>' + examen.cilindroI + '</td>' +
                '<td>' + examen.ejeD + '</td>' +
                '<td>' + examen.ejeI + '</td>' +
                '<td>' + examen.distanciaD + '</td> ' +
                '<td>' + examen.distanciaI + '</td></tr>';
        cuerpo += registro;
    });

    resultadosDistanciaD.forEach(function (examen) {
        let registro =
                '<tr onclick="moduloExamenVista.selectCliente(' + examenes.indexOf(examen) + ');">' +
                '<td>' + examen.fecha + '</td>' +
                '<td>' + examen.hora + '</td>' +
                '<td>' + examen.clave_Cliente + '</td>' +
                '<td>' + examen.esferaD + '</td>' +
                '<td>' + examen.esferaI + '</td>' +
                '<td>' + examen.cilindroD + '</td>' +
                '<td>' + examen.cilindroI + '</td>' +
                '<td>' + examen.ejeD + '</td>' +
                '<td>' + examen.ejeI + '</td>' +
                '<td>' + examen.distanciaD + '</td> ' +
                '<td>' + examen.distanciaI + '</td></tr>';
        cuerpo += registro;
    });
    resultadosEsferaI.forEach(function (examen) {
        let registro =
                '<tr onclick="moduloExamenVista.selectCliente(' + examenes.indexOf(examen) + ');">' +
                '<td>' + examen.fecha + '</td>' +
                '<td>' + examen.hora + '</td>' +
                '<td>' + examen.clave_Cliente + '</td>' +
                '<td>' + examen.esferaD + '</td>' +
                '<td>' + examen.esferaI + '</td>' +
                '<td>' + examen.cilindroD + '</td>' +
                '<td>' + examen.cilindroI + '</td>' +
                '<td>' + examen.ejeD + '</td>' +
                '<td>' + examen.ejeI + '</td>' +
                '<td>' + examen.distanciaD + '</td> ' +
                '<td>' + examen.distanciaI + '</td></tr>';
        cuerpo += registro;
    });

    resultadosCilindroI.forEach(function (examen) {
        let registro =
                '<tr onclick="moduloExamenVista.selectCliente(' + examenes.indexOf(examen) + ');">' +
                '<td>' + examen.fecha + '</td>' +
                '<td>' + examen.hora + '</td>' +
                '<td>' + examen.clave_Cliente + '</td>' +
                '<td>' + examen.esferaD + '</td>' +
                '<td>' + examen.esferaI + '</td>' +
                '<td>' + examen.cilindroD + '</td>' +
                '<td>' + examen.cilindroI + '</td>' +
                '<td>' + examen.ejeD + '</td>' +
                '<td>' + examen.ejeI + '</td>' +
                '<td>' + examen.distanciaD + '</td> ' +
                '<td>' + examen.distanciaI + '</td></tr>';
        cuerpo += registro;
    });

    resultadosEjeI.forEach(function (examen) {
        let registro =
                '<tr onclick="moduloExamenVista.selectCliente(' + examenes.indexOf(examen) + ');">' +
                '<td>' + examen.fecha + '</td>' +
                '<td>' + examen.hora + '</td>' +
                '<td>' + examen.clave_Cliente + '</td>' +
                '<td>' + examen.esferaD + '</td>' +
                '<td>' + examen.esferaI + '</td>' +
                '<td>' + examen.cilindroD + '</td>' +
                '<td>' + examen.cilindroI + '</td>' +
                '<td>' + examen.ejeD + '</td>' +
                '<td>' + examen.ejeI + '</td>' +
                '<td>' + examen.distanciaD + '</td> ' +
                '<td>' + examen.distanciaI + '</td></tr>';
        cuerpo += registro;
    });

    resultadosDistanciaI.forEach(function (examen) {
        let registro =
                '<tr onclick="moduloExamenVista.selectCliente(' + examenes.indexOf(examen) + ');">' +
                '<td>' + examen.fecha + '</td>' +
                '<td>' + examen.hora + '</td>' +
                '<td>' + examen.clave_Cliente + '</td>' +
                '<td>' + examen.esferaD + '</td>' +
                '<td>' + examen.esferaI + '</td>' +
                '<td>' + examen.cilindroD + '</td>' +
                '<td>' + examen.cilindroI + '</td>' +
                '<td>' + examen.ejeD + '</td>' +
                '<td>' + examen.ejeI + '</td>' +
                '<td>' + examen.distanciaD + '</td> ' +
                '<td>' + examen.distanciaI + '</td></tr>';
        cuerpo += registro;
    });


    console.log(cuerpo);
    document.getElementById("tblCExamen").innerHTML = cuerpo;


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

