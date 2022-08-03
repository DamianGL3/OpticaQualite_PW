//Variables generales para el indice del array
let indexClienteSeleccionado;
//Se declara el objeto vacío
let clientes = [];
//Se carga el modulo de catalogo (esto para iniciar con el catalogo cargado)
cargarModuloCatalogoClientes();

//Función FETCH para cargar el catalogo de Cliente
export function cargarModuloCatalogoClientes() {
    document.getElementById('btnCatalogo').classList.remove("btn-light");
    document.getElementById('btnCatalogo').classList.add("btn-primary");
    document.getElementById('btnAgregar').classList.remove("btn-primary");
    document.getElementById('btnAgregar').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");
    document.getElementById('btnAgregar').classList.remove("disabled");
    document.getElementById('btnModificar').classList.add("disabled");
    document.getElementById('btnEliminar').classList.add("disabled");
    fetch("moduloClientes/moduloRegistroCliente/view_CatalogoCliente.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedor-modulo").innerHTML = html;
                        loadTabla(); //Aquí carga los datos de la tabla de la función loadTabla
                    }
            );
}

//Función FETCH para cargar el Registro de Cliente
export function cargarModuloRegistroClientes() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnAgregar').classList.remove("btn-light");
    document.getElementById('btnAgregar').classList.add("btn-primary");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloClientes/moduloRegistroCliente/view_RegistroCliente.html")
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

//Función FETCH para cargar el Actualización de Cliente
export function cargarModuloModificarClientes() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-light");
    document.getElementById('btnModificar').classList.add("btn-primary");
    document.getElementById('btnAgregar').classList.remove("btn-primary");
    document.getElementById('btnAgregar').classList.add("btn-light");

    fetch("moduloClientes/moduloRegistroCliente/view_ModificarCliente.html")
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

//Aquí se habilitan y deshabilitan los botones correspondientes
export function boton() {
    document.getElementById("btnAgregar").classList.remove("disabled");
    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");

}

//Función para obtener numeros aleatorios
export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


//Función para añadir Cliente
export function addCliente() {
    Swal.fire({
        title: 'Estás seguro de guardar los cambios?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Guardar',
        denyButtonText: `No Guardar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Guardados!', '', 'success')
            //Atributos
            let numero_unico_cliente,
                    nombre,
                    apellido_paterno,
                    apellido_materno,
                    genero,
                    rfc,
                    telefono,
                    telefono_movil,
                    correo_electronico;

            //Se guardan en los atributos los valores de los inputs
            numero_unico_cliente = document.getElementById("txtNumUnico").value;
            nombre = document.getElementById("txtNombre").value;
            apellido_paterno = document.getElementById("txtApePaterno").value;
            apellido_materno = document.getElementById("txtApeMaterno").value;
            telefono = document.getElementById("txtTelefono").value;
            telefono_movil = document.getElementById("txtMovil").value;
            correo_electronico = document.getElementById("txtCorreo").value;
            rfc = document.getElementById("txtRfc").value;

            genero = document.getElementById("txtGenero").value;

            //GENERA LA CLAVE UNICA DE CLIENTE
            let ApellidoPaterno = document.getElementById("txtApePaterno").value;
            let primero = ApellidoPaterno.substring(0, 2).toUpperCase();
            let ApellidoMaterno = document.getElementById("txtApeMaterno").value;
            let segundo = ApellidoMaterno.substring(0, 1);
            let fecha = Date.now();
            let final = primero + segundo + fecha;


            //Guarda los datos de los atributos en Cliente
            let cliente = {};
            cliente.numero_unico_cliente = final;
            cliente.nombre = nombre;
            cliente.apellido_paterno = apellido_paterno;
            cliente.apellido_materno = apellido_materno;
            cliente.telefono = telefono;
            cliente.telefono_movil = telefono_movil;
            cliente.correo_electronico = correo_electronico;
            cliente.rfc = rfc;
            cliente.genero = genero;
            cliente.estatus = "Activo";
            //Añade al array el Cliente1
            clientes.push(cliente);
            clean();
            notificacionAñadir();
        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })



}

//Se crea la función de cargar tabla
export function loadTabla() {
    let cuerpo = "";
    clientes.forEach(function (cliente) {
        let registro =
                '<tr id="' + clientes.indexOf(cliente) + '"class="" onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +
                '<td>' + cliente.apellido_materno +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.correo_electronico + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblClientes").innerHTML = cuerpo;
}

//Se guardan en variables lo que seleccione en el catálogo para despues usarlo en el FETCH de modificar
let txtNumUnico;
let txtNombre;
let txtApellido_Paterno;
let txtApellido_Materno;
let txtTelefono;
let txtTelefono_Movil;
let txtCorreo;
let txtRFC;
let txtGenero;
let txtEstatus;

//Se crea la función de seleccionar los datos
export function selectCliente(index) {
    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");

    txtNumUnico = clientes[index].numero_unico_cliente;
    txtNombre = clientes[index].nombre;
    txtApellido_Paterno = clientes[index].apellido_paterno;
    txtApellido_Materno = clientes[index].apellido_materno;
    txtTelefono = clientes[index].telefono;
    txtTelefono_Movil = clientes[index].telefono_movil;
    txtCorreo = clientes[index].correo_electronico;
    txtRFC = clientes[index].rfc;
    txtGenero = clientes[index].genero;
    txtEstatus = clientes[index].estatus;
    indexClienteSeleccionado = index;

    document.getElementById(indexClienteSeleccionado).classList.add("bg-claro");
    temporizadorDeRetraso();
}

//Se define una variable global
let identificadorTiempoDeEspera;

//Se crea la función QUE FUNCIONA CON TIEMPO y se establece a 3000 milisegundos
function temporizadorDeRetraso() {
    identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 3000);
}

//Al pasar 3 segundos se ejecuta esto, la fila se vuelve blanca y el botón de agregar se habilita
function funcionConRetraso() {
    document.getElementById(indexClienteSeleccionado).classList.remove("bg-claro");
    document.getElementById('btnAgregar').classList.remove("disabled");
}

//Función para vacíar los atributos de agregar y modificar
export function clean() {
    document.getElementById("txtNumUnico").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApePaterno").value = "";
    document.getElementById("txtApeMaterno").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtMovil").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtRfc").value = "";

    document.getElementById("txtNombre").focus();
    indexClienteSeleccionado = 0;
}

//Función para leer datos al cambiar de CATALOGO a MODIFICAR
export function leerDatos(index) {
    //Habilita las casillas
    document.getElementById("txtNombre").disabled = false;
    document.getElementById("txtApePaterno").disabled = false;
    document.getElementById("txtApeMaterno").disabled = false;
    document.getElementById("txtTelefono").disabled = false;
    document.getElementById("txtMovil").disabled = false;
    document.getElementById("txtCorreo").disabled = false;
    document.getElementById("txtRfc").disabled = false;
    document.getElementById("txtGenero").disabled = false;
    document.getElementById("txtEstatus").disabled = false;
    //Lee los datos
    document.getElementById("txtNumUnico").value = txtNumUnico;
    document.getElementById("txtNombre").value = txtNombre;
    document.getElementById("txtApePaterno").value = txtApellido_Paterno;
    document.getElementById("txtApeMaterno").value = txtApellido_Materno;
    document.getElementById("txtTelefono").value = txtTelefono;
    document.getElementById("txtMovil").value = txtTelefono_Movil;
    document.getElementById("txtCorreo").value = txtCorreo;
    document.getElementById("txtRfc").value = txtRFC;
    document.getElementById("txtGenero").value = txtGenero;
    document.getElementById("txtEstatus").value = txtEstatus;
    document.getElementById("txtNombre").focus();
    //Llama a la función getHash
    getHash();
}

//Lee lo que está en txtNumUnico y lo encripta en SHA-256
export function getHash() {
    var hashInput = document.getElementById("txtNumUnico");
    var hash = new jsSHA(hashInput.value, "TEXT");
    var hashOutput = document.getElementById("txtNumUnico");
    hashOutput.value = hash.getHash("SHA-512", "HEX");
    //form.submit();
}

export function updateCliente() {
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
            let numero_unico_cliente,
                    nombre,
                    apellido_paterno,
                    apellido_materno,
                    genero,
                    rfc,
                    telefono,
                    telefono_movil,
                    estatus,
                    correo_electronico;

            //en la variable guarda lo introducido en los inputs
            numero_unico_cliente = document.getElementById("txtNumUnico").value;
            nombre = document.getElementById("txtNombre").value;
            apellido_paterno = document.getElementById("txtApePaterno").value;
            apellido_materno = document.getElementById("txtApeMaterno").value;
            telefono = document.getElementById("txtTelefono").value;
            telefono_movil = document.getElementById("txtMovil").value;
            correo_electronico = document.getElementById("txtCorreo").value;
            rfc = document.getElementById("txtRfc").value;

            genero = document.getElementById("txtGenero").value;
            estatus = document.getElementById("txtEstatus").value;

            //lo guarda en Cliente
            let cliente = {};
            cliente.numero_unico_cliente = numero_unico_cliente;
            cliente.nombre = nombre;
            cliente.apellido_paterno = apellido_paterno;
            cliente.apellido_materno = apellido_materno;
            cliente.telefono = telefono;
            cliente.telefono_movil = telefono_movil;
            cliente.correo_electronico = correo_electronico;
            cliente.rfc = rfc;
            cliente.genero = genero;
            cliente.estatus = estatus;
            //Se ubica en el Cliente del indice y lo reemplaza por el Cliente de arriba
            clientes[indexClienteSeleccionado] = cliente;
            clean();
            notificacionActualización();
        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })


}

//Borra el cliente (cambia de activo a inactivo, PERO ANTES pregunta si está seguro)
export function deleteCliente() {
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
            //ESTO ES LO UNICO QUE SE CAMBIA LO DEMÁS ES LA NOTIFICACIÓN, title, text , icon
            //Aquí la función del Cliente en el indice y reemplaza su estatus a inactivo y carga la tabla
            clientes[indexClienteSeleccionado].estatus = "Inactivo";
            loadTabla();
        } else if (
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

//Carga los datos del .json
fetch("moduloClientes/data_Clientes.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            clientes = jsondata;
            loadTabla();
        }
        );


export function searchCliente() {
    //Aquí leera lo que introducimos en el campo de buscar
    let filtro = document.getElementById("txtBuscarCliente").value;
    let resultadosNombre = clientes.filter(element => element.nombre === filtro);
    let resultadosApellidoPaterno = clientes.filter(element => element.apellido_paterno === filtro);
    let resultadosApellidoMaterno = clientes.filter(element => element.apellido_materno === filtro);
    let resultadosGenero = clientes.filter(element => element.genero === filtro);
    let resultadosTelefonoCasa = clientes.filter(element => element.telefono === filtro);
    let resultadosTelefonoMovil = clientes.filter(element => element.telefono_movil === filtro);
    let resultadosCorreo = clientes.filter(element => element.correo_electronico === filtro);
    let resultadosEstatus = clientes.filter(element => element.estatus === filtro);

    let cuerpo = "";
    //Se genera una tabla por cada filtro realizado
    //Tabla para el resultado de filtro Nombre
    resultadosNombre.forEach(function (cliente) {
        let registro =
                '<tr onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +
                '<td>' + cliente.apellido_materno +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.correo_electronico + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });

//Se genera una tabla por cada filtro realizado
    resultadosApellidoPaterno.forEach(function (cliente) {
        let registro =
                '<tr onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +
                '<td>' + cliente.apellido_materno +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.correo_electronico + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });
//Se genera una tabla por cada filtro realizado
    resultadosApellidoMaterno.forEach(function (cliente) {
        let registro =
                '<tr onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +
                '<td>' + cliente.apellido_materno +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.correo_electronico + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });
//Se genera una tabla por cada filtro realizado
    resultadosGenero.forEach(function (cliente) {
        let registro =
                '<tr onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +
                '<td>' + cliente.apellido_materno +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.correo_electronico + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });
//Se genera una tabla por cada filtro realizado
    resultadosTelefonoCasa.forEach(function (cliente) {
        let registro =
                '<tr onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +
                '<td>' + cliente.apellido_materno +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.correo_electronico + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });
//Se genera una tabla por cada filtro realizado
    resultadosTelefonoMovil.forEach(function (cliente) {
        let registro =
                '<tr onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +
                '<td>' + cliente.apellido_materno +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.correo_electronico + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });
//Se genera una tabla por cada filtro realizado
    resultadosEstatus.forEach(function (cliente) {
        let registro =
                '<tr onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +
                '<td>' + cliente.apellido_materno +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.correo_electronico + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });
//Se genera una tabla por cada filtro realizado
    resultadosCorreo.forEach(function (cliente) {
        let registro =
                '<tr onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +
                '<td>' + cliente.apellido_materno +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.correo_electronico + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });

    document.getElementById("tblClientes").innerHTML = cuerpo;
}
//Notificación de Eliminación
function notificacionEliminacion() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha eliminado correctamente!',
        showConfirmButton: false,
        timer: 1500
    })
}
//Notificación de Actualización
function notificacionActualización() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha modificado correctamente!',
        showConfirmButton: false,
        timer: 1500
    })
}
//Notificación de Añadir
function notificacionAñadir() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha añadido correctamente!',
        showConfirmButton: false,
        timer: 1500
    })
}



