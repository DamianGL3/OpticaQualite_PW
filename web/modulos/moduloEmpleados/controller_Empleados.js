//Variables generales para el indice del array
let indexempleadoSeleccionado;
//Se declara el objeto vacío
let empleados = [];
//Se carga el modulo de catalogo (esto para iniciar con el catalogo cargado)
cargarModuloCatalogoEmpleados();

//Función FETCH para cargar el catalogo de Empleados
export function cargarModuloCatalogoEmpleados() {
    document.getElementById('btnCatalogo').classList.remove("btn-light");
    document.getElementById('btnCatalogo').classList.add("btn-primary");
    document.getElementById('btnAgregar').classList.remove("btn-primary");
    document.getElementById('btnAgregar').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");
    document.getElementById('btnAgregar').classList.remove("disabled");
    document.getElementById('btnModificar').classList.add("disabled");
    document.getElementById('btnEliminar').classList.add("disabled");
    indexempleadoSeleccionado = 0;
    fetch("moduloEmpleados/moduloRegistroEmpleados/view_CatalogoEmpleado.html")
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

//Función FETCH para cargar el Registro de Empleados
export function cargarModuloRegistroEmpleados() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnAgregar').classList.remove("btn-light");
    document.getElementById('btnAgregar').classList.add("btn-primary");
    document.getElementById('btnModificar').classList.remove("btn-primary");
    document.getElementById('btnModificar').classList.add("btn-light");

    fetch("moduloEmpleados/moduloRegistroEmpleados/view_RegistroEmpleado.html")
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

//Función FETCH para cargar el Actualización de Empleados
export function cargarModuloModificarEmpleados() {
    document.getElementById('btnCatalogo').classList.remove("btn-primary");
    document.getElementById('btnCatalogo').classList.add("btn-light");
    document.getElementById('btnModificar').classList.remove("btn-light");
    document.getElementById('btnModificar').classList.add("btn-primary");
    document.getElementById('btnAgregar').classList.remove("btn-primary");
    document.getElementById('btnAgregar').classList.add("btn-light");

    fetch("moduloEmpleados/moduloRegistroEmpleados/view_ModificarEmpleado.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedor-modulo").innerHTML = html;
                        leerDatos(); //Aquí carga los datos para que cuando se abra la pagina de modificar, tenga los datos seleccionados
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


//Función para añadir Empleado
export function addEmpleado() {
    Swal.fire({
        title: 'Estás seguro de guardar los cambios?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Guardar',
        denyButtonText: `No Guardar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Oops.. Ha ocurrido un error!', '', 'error')
            //Atributos
            let numero_unico_empleado,
                    nombre,
                    apellido_paterno,
                    apellido_materno,
                    genero,
                    rfc,
                    telefono,
                    telefono_movil,
                    usuario,
                    password,
                    correo_electronico;
                    
                   
            //Se guardan en los atributos los valores de los inputs
            numero_unico_empleado = document.getElementById("txtNumUnico").value;
            nombre = document.getElementById("txtNombre").value;
            apellido_paterno = document.getElementById("txtApePaterno").value;
            apellido_materno = document.getElementById("txtApeMaterno").value;
            telefono = document.getElementById("txtTelefono").value;
            telefono_movil = document.getElementById("txtMovil").value;
            usuario = document.getElementById("txtUsuario").value;
            password = document.getElementById("txtPassword").value;
            correo_electronico = document.getElementById("txtCorreo").value;
            rfc = document.getElementById("txtRfc").value;
            genero = document.getElementById("txtGenero").value;

                   
            if (nombre === "" && apellido_paterno === "" && apellido_materno === "" && rfc === "" && telefono === "" &&
                    telefono_movil === "" && usuario === "" && password === "" && correo_electronico === ""){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'No puedes tener los campos vacíos!',
                    showConfirmButton: false,
                    timer: 1500
                })   
            }
            else if (nombre === "") {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'No puedes tener el Nombre o más campos vacíos!',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else if (apellido_paterno === "") {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'No puedes tener el Apellido Paterno o más campos vacíos!',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else if (apellido_materno === "") {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'No puedes tener el Apellido Materno o más campos vacíos!',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else if (telefono === "") {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'No puedes tener el Telefono o más campos vacíos!',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else if (telefono_movil === "") {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'No puedes tener el Telefono Movil vacío!',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else if (usuario === "") {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'No puedes tener el Usuario  vacío!',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else if (password === "") {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'No puedes tener la Contraseña vacía!',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else if (correo_electronico === "") {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'No puedes tener el Correo Electronico vacío!',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else if (rfc === "") {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'No puedes tener el RFC vacío!',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                
            //GENERA LA CLAVE UNICA DE empleado
            let ApellidoPaterno = document.getElementById("txtApePaterno").value;
            let primero = ApellidoPaterno.substring(0, 2).toUpperCase();
            let ApellidoMaterno = document.getElementById("txtApeMaterno").value;
            let segundo = ApellidoMaterno.substring(0, 1);
            let fecha = Date.now();
            let final = primero + segundo + fecha;


            //Guarda los datos de los atributos en Empleado
            let empleado = {};
            empleado.numero_unico_empleado = final;
            empleado.nombre = nombre;
            empleado.apellido_paterno = apellido_paterno;
            empleado.apellido_materno = apellido_materno;
            empleado.telefono = telefono;
            empleado.telefono_movil = telefono_movil;
            empleado.usuario = usuario;
            empleado.password = password;
            empleado.correo_electronico = correo_electronico;
            empleado.rfc = rfc;
            empleado.genero = genero;
            empleado.estatus = "Activo";

            //Añade al array el Empleado
            empleados.push(empleado);
            clean();
            notificacionAñadir(); 
            }



        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })


}

//Se crea la función de cargar tabla
export function loadTabla() {
    let cuerpo = "";
    empleados.forEach(function (empleado) {
        let registro =
                '<tr id="' + empleados.indexOf(empleado) + '"class="" onclick="moduloEmpleado.selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
                '<td>' + empleado.nombre + '</td>' +
                '<td>' + empleado.apellido_paterno + " " + empleado.apellido_materno +
                '<td>' + empleado.genero + '</td>' +
                '<td>' + empleado.telefono_movil + '</td>' +
                '<td>' + empleado.correo_electronico + '</td>' +
                '<td>' + empleado.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblEmpleados").innerHTML = cuerpo;
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
let txtUsuario;
let txtPassword;
let txtEstatus;

//Se crea la función de seleccionar los datos
export function selectEmpleado(index) {
    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");

    //Guarda en las variables que definimnos arriba con el INDICE que obtenemos al clickear una fila
    txtNumUnico = empleados[index].numero_unico_empleado;
    txtNombre = empleados[index].nombre;
    txtApellido_Paterno = empleados[index].apellido_paterno;
    txtApellido_Materno = empleados[index].apellido_materno;
    txtTelefono = empleados[index].telefono;
    txtTelefono_Movil = empleados[index].telefono_movil;
    txtCorreo = empleados[index].correo_electronico;
    txtRFC = empleados[index].rfc;
    txtGenero = empleados[index].genero;
    txtUsuario = empleados[index].usuario;
    txtPassword = empleados[index].password;
    txtEstatus = empleados[index].estatus;

    indexempleadoSeleccionado = index;

    document.getElementById(indexempleadoSeleccionado).classList.add("bg-claro");
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
    document.getElementById(indexempleadoSeleccionado).classList.remove("bg-claro");
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
    document.getElementById("txtUsuario").value = "";
    document.getElementById("txtPassword").value = "";
    document.getElementById("txtRfc").value = "";

    document.getElementById("txtNombre").focus();
    indexempleadoSeleccionado = 0;
}

//Función para leer datos al cambiar de CATALOGO a MODIFICAR
export function leerDatos(index) {
    //Lee los datos de las variables declaras globalmente
    document.getElementById("txtNumUnico").value = txtNumUnico;
    document.getElementById("txtNombre").value = txtNombre;
    document.getElementById("txtApePaterno").value = txtApellido_Paterno;
    document.getElementById("txtApeMaterno").value = txtApellido_Materno;
    document.getElementById("txtTelefono").value = txtTelefono;
    document.getElementById("txtMovil").value = txtTelefono_Movil;
    document.getElementById("txtCorreo").value = txtCorreo;
    document.getElementById("txtRfc").value = txtRFC;
    document.getElementById("txtGenero").value = txtGenero;
    document.getElementById("txtUsuario").value = txtUsuario;
    document.getElementById("txtPassword").value = txtPassword;
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
}

//Actualiza los datos
export function updateEmpleado() {
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
            let numero_unico_empleado,
                    nombre,
                    apellido_paterno,
                    apellido_materno,
                    genero,
                    rfc,
                    telefono,
                    telefono_movil,
                    usuario,
                    password,
                    correo_electronico,
                    estatus;

            //en la variable guarda lo introducido en los inputs
            numero_unico_empleado = document.getElementById("txtNumUnico").value;
            nombre = document.getElementById("txtNombre").value;
            apellido_paterno = document.getElementById("txtApePaterno").value;
            apellido_materno = document.getElementById("txtApeMaterno").value;
            telefono = document.getElementById("txtTelefono").value;
            telefono_movil = document.getElementById("txtMovil").value;
            correo_electronico = document.getElementById("txtCorreo").value;
            usuario = document.getElementById("txtUsuario").value;
            password = document.getElementById("txtPassword").value;
            rfc = document.getElementById("txtRfc").value;
            genero = document.getElementById("txtGenero").value;
            estatus = document.getElementById("txtEstatus").value;

            //lo guarda en Empleado
            let empleado = {};
            empleado.numero_unico_empleado = numero_unico_empleado;
            empleado.nombre = nombre;
            empleado.apellido_paterno = apellido_paterno;
            empleado.apellido_materno = apellido_materno;
            empleado.telefono = telefono;
            empleado.telefono_movil = telefono_movil;
            empleado.correo_electronico = correo_electronico;
            empleado.rfc = rfc;
            empleado.genero = genero;
            empleado.usuario = usuario;
            empleado.password = password;
            empleado.estatus = estatus;
            //Se ubica en el empleado del indice y lo reemplaza por el Empleado de arriba
            empleados[indexempleadoSeleccionado] = empleado;
            clean();
            notificacionActualización();
        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    })

}

//Borra el empleado (cambia de activo a inactivo, PERO ANTES pregunta si está seguro)
export function deleteEmpleado() {
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
            //Aquí la función del empleado en el indice y reemplaza su estatus a inactivo y carga la tabla
            empleados[indexempleadoSeleccionado].estatus = "Inactivo";
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
fetch("moduloEmpleados/data_Empleados.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            empleados = jsondata;
            loadTabla();
        }
        );

//Busca al empleado
export function searchEmpleado() {
    //Aquí leera lo que introducimos en el campo de buscar
    let filtro = document.getElementById("txtBuscarEmpleado").value;
    //Se aplica el filtro y se guardará en una variable según corresponda para cada campo de busqueda
    //Nombre, Apellido, etc.
    let resultadosNombre = empleados.filter(element => element.nombre === filtro);
    let resultadosApellidoPaterno = empleados.filter(element => element.apellido_paterno === filtro);
    let resultadosApellidoMaterno = empleados.filter(element => element.apellido_materno === filtro);
    let resultadosGenero = empleados.filter(element => element.genero === filtro);
    let resultadosTelefonoCasa = empleados.filter(element => element.telefono === filtro);
    let resultadosTelefonoMovil = empleados.filter(element => element.telefono_movil === filtro);
    let resultadosCorreo = empleados.filter(element => element.correo_electronico === filtro);
    let resultadosEstatus = empleados.filter(element => element.estatus === filtro);

    let cuerpo = "";
    //Se genera una tabla por cada filtro realizado
    //Tabla para el resultado de filtro Nombre
    resultadosNombre.forEach(function (empleado) {
        let registro =
                '<tr onclick="moduloEmpleado.selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
                '<td>' + empleado.nombre + '</td>' +
                '<td>' + empleado.apellido_paterno + " " + empleado.apellido_materno +
                '<td>' + empleado.genero + '</td>' +
                '<td>' + empleado.telefono_movil + '</td>' +
                '<td>' + empleado.correo_electronico + '</td>' +
                '<td>' + empleado.estatus + '</td></tr>';
        cuerpo += registro;
    });

//Se genera una tabla por cada filtro realizado
    resultadosApellidoPaterno.forEach(function (empleado) {
        let registro =
                '<tr onclick="moduloEmpleado.selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
                '<td>' + empleado.nombre + '</td>' +
                '<td>' + empleado.apellido_paterno + " " + empleado.apellido_materno +
                '<td>' + empleado.genero + '</td>' +
                '<td>' + empleado.telefono_movil + '</td>' +
                '<td>' + empleado.correo_electronico + '</td>' +
                '<td>' + empleado.estatus + '</td></tr>';
        cuerpo += registro;
    });

//Se genera una tabla por cada filtro realizado
    resultadosApellidoMaterno.forEach(function (empleado) {
        let registro =
                '<tr onclick="moduloEmpleado.selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
                '<td>' + empleado.nombre + '</td>' +
                '<td>' + empleado.apellido_paterno + " " + empleado.apellido_materno +
                '<td>' + empleado.genero + '</td>' +
                '<td>' + empleado.telefono_movil + '</td>' +
                '<td>' + empleado.correo_electronico + '</td>' +
                '<td>' + empleado.estatus + '</td></tr>';
        cuerpo += registro;
    });

//Se genera una tabla por cada filtro realizado
    resultadosEstatus.forEach(function (empleado) {
        let registro =
                '<tr onclick="moduloEmpleado.selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
                '<td>' + empleado.nombre + '</td>' +
                '<td>' + empleado.apellido_paterno + " " + empleado.apellido_materno +
                '<td>' + empleado.genero + '</td>' +
                '<td>' + empleado.telefono_movil + '</td>' +
                '<td>' + empleado.correo_electronico + '</td>' +
                '<td>' + empleado.estatus + '</td></tr>';
        cuerpo += registro;
    });

//Se genera una tabla por cada filtro realizado
    resultadosCorreo.forEach(function (empleado) {
        let registro =
                '<tr onclick="moduloEmpleado.selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
                '<td>' + empleado.nombre + '</td>' +
                '<td>' + empleado.apellido_paterno + " " + empleado.apellido_materno +
                '<td>' + empleado.genero + '</td>' +
                '<td>' + empleado.telefono_movil + '</td>' +
                '<td>' + empleado.correo_electronico + '</td>' +
                '<td>' + empleado.estatus + '</td></tr>';
        cuerpo += registro;
    });

    document.getElementById("tblEmpleados").innerHTML = cuerpo;
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


function validar() {
    let  nombre,
            apellido_paterno,
            apellido_materno,
            genero,
            rfc,
            telefono,
            telefono_movil,
            usuario,
            password,
            correo_electronico;

    //Se guardan en los atributos los valores de los inputs
    nombre = document.getElementById("txtNombre").value;
    apellido_paterno = document.getElementById("txtApePaterno").value;
    apellido_materno = document.getElementById("txtApeMaterno").value;
    telefono = document.getElementById("txtTelefono").value;
    telefono_movil = document.getElementById("txtMovil").value;
    usuario = document.getElementById("txtUsuario").value;
    password = document.getElementById("txtPassword").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRfc").value;
    if (nombre === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No puedes tener el nombre vacío!',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (apellido_paterno === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No puedes tener el apellido vacío!',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (apellido_materno === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No puedes tener el Apellido Paterno vacío!',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (telefono === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No puedes tener el Telefono vacío!',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (telefono_movil === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No puedes tener el Telefono Movil vacío!',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (usuario === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No puedes tener el Usuario  vacío!',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (password === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No puedes tener la Contraseña vacío!',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (correo_electronico === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No puedes tener el Correo Electronico vacío!',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (rfc === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No puedes tener el RFC vacío!',
            showConfirmButton: false,
            timer: 1500
        })
    }
}



