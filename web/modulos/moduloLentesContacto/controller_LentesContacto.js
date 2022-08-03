let indexLenteCGSeleccionado;
let lentesCG = [];
let indexLenteCESeleccionado;
let lentesCE = [];
cargarModuloCatalogoLentesCG();


export function cargarModuloCatalogoLentesCG() {
    document.getElementById('chEsteticos').disabled = false;
    document.getElementById('chEsteticos').checked = false;
    document.getElementById('chGraduacion').setAttribute("disabled", true);

    document.getElementById('btnCatalogo').classList.remove("btn-light");
    document.getElementById('btnCatalogo').classList.add("btn-primary");
    document.getElementById('btnAgregar').classList.remove("btn-primary");
    document.getElementById('btnAgregar').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloLentesContacto/moduloRegistroLentesContacto/view_CatalogoLentesContactoG.html")
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

export function cargarModuloCatalogoLentesCE() {

    document.getElementById('chGraduacion').disabled = false;
    document.getElementById('chGraduacion').checked = false;
    document.getElementById('chEsteticos').setAttribute("disabled", true);

    document.getElementById('btnCatalogo').classList.remove("btn-light");
    document.getElementById('btnCatalogo').classList.add("btn-primary");
    document.getElementById('btnAgregar').classList.remove("btn-primary");
    document.getElementById('btnAgregar').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloLentesContacto/moduloRegistroLentesContacto/view_CatalogoLentesContactoE.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedor-modulo").innerHTML = html;
                        loadTablaE();
                    }
            );
}


export function cargarModuloRegistroLentesCG() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnAgregar').classList.remove("btn-light");
    document.getElementById('btnAgregar').classList.add("btn-primary");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloLentesContacto/moduloRegistroLentesContacto/view_RegistroLentesContactoG.html")
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

export function cargarModuloRegistroLentesCE() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnAgregar').classList.remove("btn-light");
    document.getElementById('btnAgregar').classList.add("btn-primary");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloLentesContacto/moduloRegistroLentesContacto/view_RegistroLentesContactoE.html")
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

export function cargarModuloModificarLentesCG() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-light");
    document.getElementById('btnModificar').classList.add("btn-primary");
    fetch("moduloLentesContacto/moduloRegistroLentesContacto/view_ModificarLentesContactoG.html")
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

export function cargarModuloModificarLentesCE() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-light");
    document.getElementById('btnModificar').classList.add("btn-primary");
    fetch("moduloLentesContacto/moduloRegistroLentesContacto/view_ModificarLentesContactoE.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedor-modulo").innerHTML = html;
                        leerDatosE();
                    }
            );
}

export function boton() {
    document.getElementById("btnAgregar").classList.remove("disabled");
    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");

}





export function agregarLentesCG() {
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
                    nombre,
                    marca,
                    color,
                    queratometria,
                    esferaD,
                    esferaI,
                    cilindroD,
                    cilindroI,
                    ejeD,
                    ejeI,
                    distanciaD,
                    distanciaI;

            nombre = document.getElementById("txtNombre").value;
            marca = document.getElementById("txtMarca").value;
            color = document.getElementById("txtColor").value;
            queratometria = document.getElementById("txtQueratometria").value;
            esferaD = document.getElementById("txtEsferaD").value;
            esferaI = document.getElementById("txtEsferaI").value;
            cilindroD = document.getElementById("txtCilindroD").value;
            cilindroI = document.getElementById("txtCilindroI").value;
            ejeD = document.getElementById("txtEjeD").value;
            ejeI = document.getElementById("txtEjeI").value;
            distanciaD = document.getElementById("txtDistanciaD").value;
            distanciaI = document.getElementById("txtDistanciaI").value;

            //form.submit();
            let lenteCG = {};
            lenteCG.nombre = nombre;
            lenteCG.marca = marca;
            lenteCG.color = color;
            lenteCG.queratometria = queratometria;
            lenteCG.esferaD = esferaD;
            lenteCG.cilindroD = cilindroD;
            lenteCG.ejeD = ejeD;
            lenteCG.distanciaD = distanciaD;
            lenteCG.esferaI = esferaI;
            lenteCG.cilindroI = cilindroI;
            lenteCG.ejeI = ejeI;
            lenteCG.distanciaI = distanciaI;
            lenteCG.estatus = "Activo";
            lentesCG.push(lenteCG);
            clean();
            notificacionAñadir();

        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })

}

export function agregarLentesCE() {
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
                    nombre,
                    marca,
                    color,
                    queratometria;




            nombre = document.getElementById("txtNombreE").value;
            marca = document.getElementById("txtMarcaE").value;
            color = document.getElementById("txtColorE").value;
            queratometria = document.getElementById("txtQueratometriaE").value;


            //form.submit();
            let lenteCE = {};

            lenteCE.nombre = nombre;
            lenteCE.marca = marca;
            lenteCE.color = color;
            lenteCE.queratometria = queratometria;
            lenteCE.estatus = "Activo";
            lentesCE.push(lenteCE);
            cleanE();
            notificacionAñadir();

        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })



}

export function loadTabla() {
    let cuerpo = "";
    lentesCG.forEach(function (lenteCG) {
        let registro =
                '<tr id="' + lentesCG.indexOf(lenteCG) + '"class="" onclick="moduloLentesCG.SeleccionarLenteCG(' + lentesCG.indexOf(lenteCG) + ');">' +
                '<td>' + lenteCG.nombre + '</td>' +
                '<td>' + lenteCG.marca +
                '<td>' + lenteCG.color +
                '<td>' + lenteCG.queratometria + '</td>' +
                '<td>' + "Foto" + '</td>' +
                '<td>' + lenteCG.esferaD + '</td>' +
                '<td>' + lenteCG.esferaI + '</td>' +
                '<td>' + lenteCG.cilindroD + '</td>' +
                '<td>' + lenteCG.cilindroI + '</td>' +
                '<td>' + lenteCG.ejeD + '</td>' +
                '<td>' + lenteCG.ejeI + '</td>' +
                '<td>' + lenteCG.distanciaD + '</td>' +
                '<td>' + lenteCG.distanciaI + '</td>' +
                '<td>' + lenteCG.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblLentesCG").innerHTML = cuerpo;
}

export function loadTablaE() {
    let cuerpo = "";
    lentesCE.forEach(function (lenteCE) {
        let registro =
                '<tr id="' + lentesCE.indexOf(lenteCE) + '"class="" onclick="moduloLentesCE.SeleccionarLenteCE(' + lentesCE.indexOf(lenteCE) + ');">' +
                '<td>' + lenteCE.nombre + '</td>' +
                '<td>' + lenteCE.marca +
                '<td>' + lenteCE.color +
                '<td>' + lenteCE.queratometria + '</td>' +
                '<td>' + "Foto" + '</td>' +
                '<td>' + lenteCE.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblLentesCE").innerHTML = cuerpo;
}
let txtMarca;
let txtNombre;
let txtColor;
let txtQueratometria;
let txtEsferaD;
let txtCilindroD;
let txtEjeD;
let txtDistanciaD;
let txtEsferaI;
let txtCilindroI;
let txtEjeI;
let txtDistanciaI;
let txtEstatus;
let txtMarcaE;
let txtNombreE;
let txtColorE;
let txtEstatusE;
let txtQueratometriaE;

export function SeleccionarLenteCG(index) {
    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");

    txtMarca = lentesCG[index].marca;
    txtNombre = lentesCG[index].nombre;
    txtColor = lentesCG[index].color;
    txtQueratometria = lentesCG[index].queratometria;
    txtEsferaD = lentesCG[index].esferaD;
    txtEsferaI = lentesCG[index].esferaI;
    txtCilindroD = lentesCG[index].cilindroD;
    txtCilindroI = lentesCG[index].cilindroI;
    txtEjeD = lentesCG[index].ejeD;
    txtEjeI = lentesCG[index].ejeI;
    txtDistanciaD = lentesCG[index].distanciaD;
    txtDistanciaI = lentesCG[index].distanciaI;
    txtEstatus = lentesCG[index].estatus;

    indexLenteCGSeleccionado = index;

    document.getElementById(indexLenteCGSeleccionado).classList.add("bg-claro");
    temporizadorDeRetraso();
}

export function SeleccionarLenteCE(index) {
    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");

    txtMarcaE = lentesCE[index].marca;
    txtNombreE = lentesCE[index].nombre;
    txtColorE = lentesCE[index].color;
    txtQueratometriaE = lentesCE[index].queratometria;
    txtEstatusE = lentesCE[index].estatus;

    indexLenteCESeleccionado = index;

    document.getElementById(indexLenteCESeleccionado).classList.add("bg-claro");
    temporizadorDeRetraso();
}

let identificadorTiempoDeEspera;

function temporizadorDeRetraso() {
    identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
    document.getElementById(indexLenteCGSeleccionado).classList.remove("bg-claro");
    document.getElementById('btnAgregar').classList.remove("disabled");
}
function funcionConRetrasoE() {
    document.getElementById(indexLenteCESeleccionado).classList.remove("bg-claro");
    document.getElementById('btnAgregar').classList.remove("disabled");
}

export function clean() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtColor").value = "";
    document.getElementById("txtQueratometria").value = "";
    document.getElementById("txtEsferaD").value = "";
    document.getElementById("txtEsferaI").value = "";
    document.getElementById("txtCilindroD").value = "";
    document.getElementById("txtCilindroI").value = "";
    document.getElementById("txtEjeD").value = "";
    document.getElementById("txtEjeI").value = "";
    document.getElementById("txtDistanciaD").value = "";
    document.getElementById("txtDistanciaI").value = "";

    document.getElementById("txtNombre").focus();
    indexLenteCGSeleccionado = 0;
}

export function cleanE() {
    document.getElementById("txtNombreE").value = "";
    document.getElementById("txtMarcaE").value = "";
    document.getElementById("txtColorE").value = "";
    document.getElementById("txtQueratometriaE").value = "";



    document.getElementById("txtNombreE").focus();
    indexLenteCESeleccionado = 0;
}

export function leerDatos(index) {

    //Habilita las casillas
    document.getElementById("txtNombre").disabled = false;
    document.getElementById("txtMarca").disabled = false;
    document.getElementById("txtColor").disabled = false;
    document.getElementById("txtQueratometria").disabled = false;
    document.getElementById("txtEsferaD").disabled = false;
    document.getElementById("txtEsferaI").disabled = false;
    document.getElementById("txtCilindroD").disabled = false;
    document.getElementById("txtCilindroI").disabled = false;
    document.getElementById("txtEjeD").disabled = false;
    document.getElementById("txtEjeI").disabled = false;
    document.getElementById("txtDistanciaD").disabled = false;
    document.getElementById("txtDistanciaI").disabled = false;
    document.getElementById("txtEstatus").disabled = false;
    //Lee los datos
    document.getElementById("txtNombre").value = txtNombre;
    document.getElementById("txtMarca").value = txtMarca;
    document.getElementById("txtColor").value = txtColor;
    document.getElementById("txtQueratometria").value = txtQueratometria;
    document.getElementById("txtEsferaD").value = txtEsferaD;
    document.getElementById("txtEsferaI").value = txtEsferaI;
    document.getElementById("txtCilindroD").value = txtCilindroD;
    document.getElementById("txtCilindroI").value = txtCilindroI;
    document.getElementById("txtEjeD").value = txtEjeD;
    document.getElementById("txtEjeI").value = txtEjeI;
    document.getElementById("txtDistanciaD").value = txtDistanciaD;
    document.getElementById("txtDistanciaI").value = txtDistanciaI;
    document.getElementById("txtEstatus").value = txtEstatus;
    document.getElementById("txtNombre").focus();

}

export function leerDatosE(index) {
    

    //Habilita las casillas
    document.getElementById("txtNombreE").disabled = false;
    document.getElementById("txtMarcaE").disabled = false;
    document.getElementById("txtColorE").disabled = false;
    document.getElementById("txtQueratometriaE").disabled = false;
    document.getElementById("txtEstatusE").disabled = false;
    //Lee los datos
    document.getElementById("txtNombreE").value = txtNombreE;
    document.getElementById("txtMarcaE").value = txtMarcaE;
    document.getElementById("txtColorE").value = txtColorE;
    document.getElementById("txtQueratometriaE").value = txtQueratometriaE;
    document.getElementById("txtNombreE").focus();

}

export function actualizarLenteCG() {

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
                    nombre,
                    marca,
                    color,
                    queratometria,
                    esferaD,
                    esferaI,
                    cilindroD,
                    cilindroI,
                    ejeD,
                    ejeI,
                    distanciaD,
                    distanciaI;

            nombre = document.getElementById("txtNombre").value;
            marca = document.getElementById("txtMarca").value;
            color = document.getElementById("txtColor").value;
            queratometria = document.getElementById("txtQueratometria").value;
            esferaD = document.getElementById("txtEsferaD").value;
            esferaI = document.getElementById("txtEsferaI").value;
            cilindroD = document.getElementById("txtCilindroD").value;
            cilindroI = document.getElementById("txtCilindroI").value;
            ejeD = document.getElementById("txtEjeD").value;
            ejeI = document.getElementById("txtEjeI").value;
            distanciaD = document.getElementById("txtDistanciaD").value;
            distanciaI = document.getElementById("txtDistanciaI").value;

            //form.submit();
            let lenteCG = {};
            lenteCG.nombre = nombre;
            lenteCG.marca = marca;
            lenteCG.color = color;
            lenteCG.queratometria = queratometria;
            lenteCG.esferaD = esferaD;
            lenteCG.cilindroD = cilindroD;
            lenteCG.ejeD = ejeD;
            lenteCG.distanciaD = distanciaD;
            lenteCG.esferaI = esferaI;
            lenteCG.cilindroI = cilindroI;
            lenteCG.ejeI = ejeI;
            lenteCG.distanciaI = distanciaI;
            lenteCG.estatus = "Activo";
            lentesCG[indexLenteCGSeleccionado] = lenteCG;
            clean();
            notificacionActualización();

        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })

}

export function actualizarLenteCE() {
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

            let id,
                    nombre,
                    marca,
                    color,
                    queratometria;


            nombre = document.getElementById("txtNombreE").value;
            marca = document.getElementById("txtMarcaE").value;
            color = document.getElementById("txtColorE").value;
            queratometria = document.getElementById("txtQueratometriaE").value;

            //form.submit();
            let lenteCE = {};
            lenteCE.id = id;
            lenteCE.nombre = nombre;
            lenteCE.marca = marca;
            lenteCE.color = color;
            lenteCE.queratometria = queratometria;
            lenteCE.estatus = "Activo";
            lentesCE[indexLenteCESeleccionado] = lenteCE;
            cleanE();
            notificacionAñadir();

        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })


}

export function elimimarLenteCG() {
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

            lentesCG[indexLenteCGSeleccionado].estatus = "Inactivo";
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

export function elimimarLenteCE() {
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

            lentesCE[indexLenteCESeleccionado].estatus = "Inactivo";
            loadTablaE();
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

fetch("moduloLentesContacto/data_LentesCG.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            lentesCG = jsondata;
            loadTabla();
        }
        );

fetch("moduloLentesContacto/data_LentesCE.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            lentesCE = jsondata;
            loadTablaE()();
        }
        );


export function buscarlente() {
    let filtro = document.getElementById("txtBuscarLenteCG").value;
    let resultadosNombre = lentesCG.filter(element => element.nombre === filtro);
    let resultadosMarca = lentesCG.filter(element => element.marca === filtro);
    let resultadosColor = lentesCG.filter(element => element.color === filtro);
    let resultadosQueratometria = lentesCG.filter(element => element.queratometria === filtro);
    let resultadosEsferas = lentesCG.filter(element => element.esferas === filtro);
    let resultadosCilindros = lentesCG.filter(element => element.cilindros === filtro);
    let resultadosEjes = lentesCG.filter(element => element.ejes === filtro);
    let resultadosDistancias = lentesCG.filter(element => element.distancias === filtro);
    let resultadosEstatus = lentesCG.filter(element => element.estatus === filtro);

    let cuerpo = "";

    resultadosNombre.forEach(function (lenteCG) {
        let registro =
                '<tr onclick="moduloLentesCG.SeleccionarLenteCG(' + lentesCG.indexOf(lenteCG) + ');">' +
                '<td>' + lenteCG.nombre + '</td>' +
                '<td>' + lenteCG.marca +
                '<td>' + lenteCG.color +
                '<td>' + lenteCG.queratometria + '</td>' +
                '<td>' + lenteCG.foto + '</td>' +
                '<td>' + lenteCG.esferaD + '</td>' +
                '<td>' + lenteCG.esferaI + '</td>' +
                '<td>' + lenteCG.cilindroD + '</td>' +
                '<td>' + lenteCG.cilindroI + '</td>' +
                '<td>' + lenteCG.ejeD + '</td>' +
                '<td>' + lenteCG.ejeI + '</td>' +
                '<td>' + lenteCG.distanciaD + '</td>' +
                '<td>' + lenteCG.distanciaI + '</td>' +
                '<td>' + lenteCG.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosMarca.forEach(function (lenteCG) {
        let registro =
                '<tr onclick="moduloLentesCG.SeleccionarLenteCG(' + lentesCG.indexOf(lenteCG) + ');">' +
                '<td>' + lenteCG.nombre + '</td>' +
                '<td>' + lenteCG.marca +
                '<td>' + lenteCG.color +
                '<td>' + lenteCG.queratometria + '</td>' +
                '<td>' + lenteCG.foto + '</td>' +
                '<td>' + lenteCG.esferaD + '</td>' +
                '<td>' + lenteCG.esferaI + '</td>' +
                '<td>' + lenteCG.cilindroD + '</td>' +
                '<td>' + lenteCG.cilindroI + '</td>' +
                '<td>' + lenteCG.ejeD + '</td>' +
                '<td>' + lenteCG.ejeI + '</td>' +
                '<td>' + lenteCG.distanciaD + '</td>' +
                '<td>' + lenteCG.distanciaI + '</td>' +
                '<td>' + lenteCG.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosColor.forEach(function (lenteCG) {
        let registro =
                '<tr onclick="moduloLentesCG.SeleccionarLenteCG(' + lentesCG.indexOf(lenteCG) + ');">' +
                '<td>' + lenteCG.nombre + '</td>' +
                '<td>' + lenteCG.marca +
                '<td>' + lenteCG.color +
                '<td>' + lenteCG.queratometria + '</td>' +
                '<td>' + lenteCG.foto + '</td>' +
                '<td>' + lenteCG.esferaD + '</td>' +
                '<td>' + lenteCG.esferaI + '</td>' +
                '<td>' + lenteCG.cilindroD + '</td>' +
                '<td>' + lenteCG.cilindroI + '</td>' +
                '<td>' + lenteCG.ejeD + '</td>' +
                '<td>' + lenteCG.ejeI + '</td>' +
                '<td>' + lenteCG.distanciaD + '</td>' +
                '<td>' + lenteCG.distanciaI + '</td>' +
                '<td>' + lenteCG.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosQueratometria.forEach(function (lenteCG) {
        let registro =
                '<tr onclick="moduloLentesCG.SeleccionarLenteCG(' + lentesCG.indexOf(lenteCG) + ');">' +
                '<td>' + lenteCG.nombre + '</td>' +
                '<td>' + lenteCG.marca +
                '<td>' + lenteCG.color +
                '<td>' + lenteCG.queratometria + '</td>' +
                '<td>' + lenteCG.foto + '</td>' +
                '<td>' + lenteCG.esferaD + '</td>' +
                '<td>' + lenteCG.esferaI + '</td>' +
                '<td>' + lenteCG.cilindroD + '</td>' +
                '<td>' + lenteCG.cilindroI + '</td>' +
                '<td>' + lenteCG.ejeD + '</td>' +
                '<td>' + lenteCG.ejeI + '</td>' +
                '<td>' + lenteCG.distanciaD + '</td>' +
                '<td>' + lenteCG.distanciaI + '</td>' +
                '<td>' + lenteCG.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosEsferas.forEach(function (lenteCG) {
        let registro =
                '<tr onclick="moduloLentesCG.SeleccionarLenteCG(' + lentesCG.indexOf(lenteCG) + ');">' +
                '<td>' + lenteCG.nombre + '</td>' +
                '<td>' + lenteCG.marca +
                '<td>' + lenteCG.color +
                '<td>' + lenteCG.queratometria + '</td>' +
                '<td>' + lenteCG.foto + '</td>' +
                '<td>' + lenteCG.esferaD + '</td>' +
                '<td>' + lenteCG.esferaI + '</td>' +
                '<td>' + lenteCG.cilindroD + '</td>' +
                '<td>' + lenteCG.cilindroI + '</td>' +
                '<td>' + lenteCG.ejeD + '</td>' +
                '<td>' + lenteCG.ejeI + '</td>' +
                '<td>' + lenteCG.distanciaD + '</td>' +
                '<td>' + lenteCG.distanciaI + '</td>' +
                '<td>' + lenteCG.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosCilindros.forEach(function (lenteCG) {
        let registro =
                '<tr onclick="moduloLentesCG.SeleccionarLenteCG(' + lentesCG.indexOf(lenteCG) + ');">' +
                '<td>' + lenteCG.nombre + '</td>' +
                '<td>' + lenteCG.marca +
                '<td>' + lenteCG.color +
                '<td>' + lenteCG.queratometria + '</td>' +
                '<td>' + lenteCG.foto + '</td>' +
                '<td>' + lenteCG.esferaD + '</td>' +
                '<td>' + lenteCG.esferaI + '</td>' +
                '<td>' + lenteCG.cilindroD + '</td>' +
                '<td>' + lenteCG.cilindroI + '</td>' +
                '<td>' + lenteCG.ejeD + '</td>' +
                '<td>' + lenteCG.ejeI + '</td>' +
                '<td>' + lenteCG.distanciaD + '</td>' +
                '<td>' + lenteCG.distanciaI + '</td>' +
                '<td>' + lenteCG.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosEstatus.forEach(function (lenteCG) {
        let registro =
                '<tr onclick="moduloLentesCG.SeleccionarLenteCG(' + lentesCG.indexOf(lenteCG) + ');">' +
                '<td>' + lenteCG.nombre + '</td>' +
                '<td>' + lenteCG.marca +
                '<td>' + lenteCG.color +
                '<td>' + lenteCG.queratometria + '</td>' +
                '<td>' + lenteCG.foto + '</td>' +
                '<td>' + lenteCG.esferaD + '</td>' +
                '<td>' + lenteCG.esferaI + '</td>' +
                '<td>' + lenteCG.cilindroD + '</td>' +
                '<td>' + lenteCG.cilindroI + '</td>' +
                '<td>' + lenteCG.ejeD + '</td>' +
                '<td>' + lenteCG.ejeI + '</td>' +
                '<td>' + lenteCG.distanciaD + '</td>' +
                '<td>' + lenteCG.distanciaI + '</td>' +
                '<td>' + lenteCG.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosEjes.forEach(function (lenteCG) {
        let registro =
                '<tr onclick="moduloLentesCG.SeleccionarLenteCG(' + lentesCG.indexOf(lenteCG) + ');">' +
                '<td>' + lenteCG.nombre + '</td>' +
                '<td>' + lenteCG.marca +
                '<td>' + lenteCG.color +
                '<td>' + lenteCG.queratometria + '</td>' +
                '<td>' + lenteCG.foto + '</td>' +
                '<td>' + lenteCG.esferaD + '</td>' +
                '<td>' + lenteCG.esferaI + '</td>' +
                '<td>' + lenteCG.cilindroD + '</td>' +
                '<td>' + lenteCG.cilindroI + '</td>' +
                '<td>' + lenteCG.ejeD + '</td>' +
                '<td>' + lenteCG.ejeI + '</td>' +
                '<td>' + lenteCG.distanciaD + '</td>' +
                '<td>' + lenteCG.distanciaI + '</td>' +
                '<td>' + lenteCG.estatus + '</td></tr>';
        cuerpo += registro;
    });
    resultadosDistancias.forEach(function (lenteCG) {
        let registro =
                '<tr onclick="moduloLentesCG.SeleccionarLenteCG(' + lentesCG.indexOf(lenteCG) + ');">' +
                '<td>' + lenteCG.nombre + '</td>' +
                '<td>' + lenteCG.marca +
                '<td>' + lenteCG.color +
                '<td>' + lenteCG.queratometria + '</td>' +
                '<td>' + lenteCG.foto + '</td>' +
                '<td>' + lenteCG.esferaD + '</td>' +
                '<td>' + lenteCG.esferaI + '</td>' +
                '<td>' + lenteCG.cilindroD + '</td>' +
                '<td>' + lenteCG.cilindroI + '</td>' +
                '<td>' + lenteCG.ejeD + '</td>' +
                '<td>' + lenteCG.ejeI + '</td>' +
                '<td>' + lenteCG.distanciaD + '</td>' +
                '<td>' + lenteCG.distanciaI + '</td>' +
                '<td>' + lenteCG.estatus + '</td></tr>';
        cuerpo += registro;
    });

    document.getElementById("tblLentesCG").innerHTML = cuerpo;


}

export function buscarlenteE() {
    let filtro = document.getElementById("txtBuscarLenteCE").value;
    let resultadosNombreE = lentesCE.filter(element => element.nombre === filtro);
    let resultadosMarcaE = lentesCE.filter(element => element.marca === filtro);
    let resultadosColorE = lentesCE.filter(element => element.color === filtro);
    let resultadosQueratometriaE = lentesCE.filter(element => element.queratometria === filtro);
    let resultadosEstatusE = lentesCE.filter(element => element.estatus === filtro);

    let cuerpo = "";

    resultadosNombreE.forEach(function (lenteCE) {
        let registro =
                '<tr onclick="moduloLentesCE.SeleccionarLenteCE(' + lentesCE.indexOf(lenteCE) + ');">' +
                '<td>' + lenteCE.nombre + '</td>' +
                '<td>' + lenteCE.marca +
                '<td>' + lenteCE.color +
                '<td>' + lenteCE.queratometria + '</td>' +
                '<td>' + "Foto" + '</td>' +
                '<td>' + lenteCE.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosMarcaE.forEach(function (lenteCE) {
        let registro =
                '<tr onclick="moduloLentesCE.SeleccionarLenteCE(' + lentesCE.indexOf(lenteCE) + ');">' +
                '<td>' + lenteCE.nombre + '</td>' +
                '<td>' + lenteCE.marca +
                '<td>' + lenteCE.color +
                '<td>' + lenteCE.queratometria + '</td>' +
                '<td>' + "Foto" + '</td>' +
                '<td>' + lenteCE.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosColorE.forEach(function (lenteCE) {
        let registro =
                '<tr onclick="moduloLentesCE.SeleccionarLenteCE(' + lentesCE.indexOf(lenteCE) + ');">' +
                '<td>' + lenteCE.nombre + '</td>' +
                '<td>' + lenteCE.marca +
                '<td>' + lenteCE.color +
                '<td>' + lenteCE.queratometria + '</td>' +
                '<td>' + "Foto" + '</td>' +
                '<td>' + lenteCE.estatus + '</td></tr>';
        cuerpo += registro;
    });

    resultadosQueratometriaE.forEach(function (lenteCE) {
        let registro =
                '<tr onclick="moduloLentesCE.SeleccionarLenteCE(' + lentesCE.indexOf(lenteCE) + ');">' +
                '<td>' + lenteCE.nombre + '</td>' +
                '<td>' + lenteCE.marca +
                '<td>' + lenteCE.color +
                '<td>' + lenteCE.queratometria + '</td>' +
                '<td>' + "Foto" + '</td>' +
                '<td>' + lenteCE.estatus + '</td></tr>';
        cuerpo += registro;
    });


    resultadosEstatusE.forEach(function (lenteCE) {
        let registro =
                '<tr onclick="moduloLentesCE.SeleccionarLenteCE(' + lentesCE.indexOf(lenteCE) + ');">' +
                '<td>' + lenteCE.nombre + '</td>' +
                '<td>' + lenteCE.marca +
                '<td>' + lenteCE.color +
                '<td>' + lenteCE.queratometria + '</td>' +
                '<td>' + "Foto" + '</td>' +
                '<td>' + lenteCE.estatus + '</td></tr>';
        cuerpo += registro;
    });

    document.getElementById("tblLentesCE").innerHTML = cuerpo;


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

