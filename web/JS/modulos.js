//  ESTA ES LA PRIMER LLAMADA FETCH.
//  AL AGREGAR UNA NUEVO MODULO llamarlo como cargarNuevo
//  es importante leer la parte del CONTROLADOR
//  EJEMPLO
//  moduloCliente = controller
//  ESTA es para definir al momento de hacer ONCLICK
//  Si se agrega otro sería moduloNuevo

function cargarHome() {
    document.getElementById("navbar-home").innerHTML = "<b>inicio</b>"
    document.getElementById("navbar-clientes").innerHTML = "Clientes"
    document.getElementById("navbar-empleados").innerHTML = "Empleados"
    document.getElementById("navbar-soluciones").innerHTML = "Soluciones"
    document.getElementById("navbar-productos").innerHTML = "Productos"
    document.getElementById("navbar-tratamientos").innerHTML = "Tratamientos"
    document.getElementById("navbar-materiales").innerHTML = "Materiales"
    document.getElementById("navbar-lentesDeContacto").innerHTML = "Lentes De Contacto"
    document.getElementById("navbar-armazones").innerHTML = "Armazones"
    document.getElementById("navbar-accesorios").innerHTML = "Accesorios"
    document.getElementById("navbar-servicios").innerHTML = "Servicios"
    document.getElementById("navbar-examenVista").innerHTML = "Examen de la Vista"
    document.getElementById("navbar-otros").innerHTML = "Otros"

    fetch("moduloHome/view_Home.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            ).then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
            }
    );
}

function cargarModuloClientes(){
document.getElementById("navbar-home").innerHTML = "inicio"
        document.getElementById("navbar-empleados").innerHTML = "Empleados"
        document.getElementById("navbar-soluciones").innerHTML = "Soluciones"
        document.getElementById("navbar-productos").innerHTML = "Productos"
        document.getElementById("navbar-tratamientos").innerHTML = "Tratamientos"
        document.getElementById("navbar-lentesDeContacto").innerHTML = "Lentes De Contacto"
        document.getElementById("navbar-materiales").innerHTML = "Materiales"
        document.getElementById("navbar-clientes").innerHTML = "<b>Clientes</b>"
        document.getElementById("navbar-armazones").innerHTML = "Armazones"
        document.getElementById("navbar-accesorios").innerHTML = "Accesorios"
        document.getElementById("navbar-servicios").innerHTML = "Servicios"
        document.getElementById("navbar-examenVista").innerHTML = "Examen de la Vista"
        document.getElementById("navbar-otros").innerHTML = "Otros"

        fetch("moduloClientes/view_Clientes.html")
        .then(
                function(response){
                return response.text();
                }
        )
        .then(
                function(html){
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import ("../modulos/moduloClientes/controller_Clientes.js").then(
                        function(controller){
                        moduloCliente = controller;
                                moduloCliente.cargarModuloCatalogoClientes();
                        }
                );
                }
        );
}



function cargarModuloEmpleados(){
document.getElementById("navbar-home").innerHTML = "inicio"
        document.getElementById("navbar-clientes").innerHTML = "Clientes"
        document.getElementById("navbar-soluciones").innerHTML = "Soluciones"
        document.getElementById("navbar-productos").innerHTML = "Productos"
        document.getElementById("navbar-tratamientos").innerHTML = "Tratamientos"
        document.getElementById("navbar-lentesDeContacto").innerHTML = "Lentes De Contacto"
        document.getElementById("navbar-empleados").innerHTML = "<b>Empleados</b>"
        document.getElementById("navbar-armazones").innerHTML = "Armazones"
        document.getElementById("navbar-accesorios").innerHTML = "Accesorios"
        document.getElementById("navbar-servicios").innerHTML = "Servicios"
        document.getElementById("navbar-examenVista").innerHTML = "Examen de la Vista"
        document.getElementById("navbar-otros").innerHTML = "Otros"

        fetch("moduloEmpleados/view_Empleados.html")
        .then(
                function(response){
                return response.text();
                }
        )
        .then(
                function(html){
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import ("../modulos/moduloEmpleados/controller_Empleados.js").then(
                        function(controller){
                        moduloEmpleado = controller;
                                moduloEmpleado.cargarModuloCatalogoEmpleados();
                        }
                );
                }
        );
}

function cargarModuloSoluciones(){
document.getElementById("navbar-home").innerHTML = "inicio"
        document.getElementById("navbar-empleados").innerHTML = "Empleados"
        document.getElementById("navbar-clientes").innerHTML = "Clientes"
        document.getElementById("navbar-lentesDeContacto").innerHTML = "Lentes De Contacto"
        document.getElementById("navbar-soluciones").innerHTML = "<b>Soluciones</b>"
        document.getElementById("navbar-productos").innerHTML = "<b>Productos</b>"
        document.getElementById("navbar-materiales").innerHTML = "Materiales"
        document.getElementById("navbar-tratamientos").innerHTML = "Tratamientos"
        document.getElementById("navbar-armazones").innerHTML = "Armazones"
        document.getElementById("navbar-accesorios").innerHTML = "Accesorios"
        document.getElementById("navbar-servicios").innerHTML = "Servicios"
        document.getElementById("navbar-examenVista").innerHTML = "Examen de la Vista"
        document.getElementById("navbar-otros").innerHTML = "Otros"

        fetch("moduloSoluciones/view_Soluciones.html")
        .then(
                function(response){
                return response.text();
                }
        )
        .then(
                function(html){
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import ("../modulos/moduloSoluciones/controller_Soluciones.js").then(
                        function(controller){
                        moduloSolucion = controller;
                                moduloSolucion.cargarModuloCatalogoSoluciones();
                        }
                );
                }
        );
}


function cargarModuloTratamientos(){
document.getElementById("navbar-home").innerHTML = "inicio"
        document.getElementById("navbar-empleados").innerHTML = "Empleados"
        document.getElementById("navbar-clientes").innerHTML = "Clientes"
        document.getElementById("navbar-soluciones").innerHTML = "Soluciones"
        document.getElementById("navbar-lentesDeContacto").innerHTML = "Lentes De Contacto"
        document.getElementById("navbar-productos").innerHTML = "Productos"
        document.getElementById("navbar-materiales").innerHTML = "Materiales"
        document.getElementById("navbar-tratamientos").innerHTML = "<b>Tratamientos</b>"
        document.getElementById("navbar-armazones").innerHTML = "Armazones"
        document.getElementById("navbar-accesorios").innerHTML = "Accesorios"
        document.getElementById("navbar-servicios").innerHTML = "Servicios"
        document.getElementById("navbar-examenVista").innerHTML = "Examen de la Vista"
        document.getElementById("navbar-otros").innerHTML = "<b>Otros</b>"


        fetch("moduloTratamientos/view_Tratamientos.html")
        .then(
                function(response){
                return response.text();
                }
        )
        .then(
                function(html){
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import ("../modulos/moduloTratamientos/controller_Tratamientos.js").then(
                        function(controller){
                        moduloTratamiento = controller;
                                moduloTratamiento.cargarModuloCatalogoTratamiento();
                        }
                );
                }
        );
}

function cargarModuloLentesDeContactoCG(){
document.getElementById("navbar-home").innerHTML = "inicio"
        document.getElementById("navbar-empleados").innerHTML = "Empleados"
        document.getElementById("navbar-clientes").innerHTML = "Clientes"
        document.getElementById("navbar-soluciones").innerHTML = "Soluciones"
        document.getElementById("navbar-productos").innerHTML = "<b>Productos</b>"
        document.getElementById("navbar-tratamientos").innerHTML = "Tratamientos"
        document.getElementById("navbar-materiales").innerHTML = "Materiales"
        document.getElementById("navbar-lentesDeContacto").innerHTML = "<b>Lentes De Contacto</b>"
        document.getElementById("navbar-armazones").innerHTML = "Armazones"
        document.getElementById("navbar-accesorios").innerHTML = "Accesorios"
        document.getElementById("navbar-servicios").innerHTML = "Servicios"
        document.getElementById("navbar-examenVista").innerHTML = "Examen de la Vista"


        fetch("moduloLentesContacto/view_LentesCG.html")
        .then(
                function(response){
                return response.text();
                }
        )
        .then(
                function(html){
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import ("../modulos/moduloLentesContacto/controller_LentesContacto.js").then(
                        function(controller){
                        moduloLentesCG = controller;
                        moduloLentesCG.cargarModuloCatalogoLentesCG();
                        }
                );
                }
        );
}

function cargarModuloLentesDeContactoCE(){
    document.getElementById("navbar-home").innerHTML = "inicio"
    document.getElementById("navbar-empleados").innerHTML = "Empleados"
    document.getElementById("navbar-clientes").innerHTML = "Clientes"
    
    fetch("moduloLentesContacto/view_LentesCE.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modulos/moduloLentesContacto/controller_LentesContacto.js").then(
                            function(controller){
                                moduloLentesCE = controller;
                                moduloLentesCE.cargarModuloCatalogoLentesCE();
                            }
                            );
                }
            );
}

function cargarModuloMateriales(){
document.getElementById("navbar-home").innerHTML = "inicio"
        document.getElementById("navbar-empleados").innerHTML = "Empleados"
        document.getElementById("navbar-clientes").innerHTML = "Clientes"
        document.getElementById("navbar-soluciones").innerHTML = "Soluciones"
        document.getElementById("navbar-productos").innerHTML = "<b>Productos</b>"
        document.getElementById("navbar-tratamientos").innerHTML = "Tratamientos"
        document.getElementById("navbar-lentesDeContacto").innerHTML = "Lentes De Contacto"
        document.getElementById("navbar-materiales").innerHTML = "<b>Materiales</b>"
        document.getElementById("navbar-armazones").innerHTML = "Armazones"
        document.getElementById("navbar-servicios").innerHTML = "Servicios"
        document.getElementById("navbar-examenVista").innerHTML = "Examen de la Vista"
        document.getElementById("navbar-accesorios").innerHTML = "Accesorios"


        fetch("moduloMateriales/view_Materiales.html")
        .then(
                function(response){
                return response.text();
                }
        )
        .then(
                function(html){
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import ("../modulos/moduloMateriales/controller_Materiales.js").then(
                        function(controller){
                        moduloMateriales = controller;
                                moduloMateriales.cargarModuloCatalogoMateriales();
                        }
                );
                }
        );
}

function cargarModuloArmazon(){
document.getElementById("navbar-home").innerHTML = "inicio"
        document.getElementById("navbar-empleados").innerHTML = "Empleados"
        document.getElementById("navbar-clientes").innerHTML = "Clientes"
        document.getElementById("navbar-soluciones").innerHTML = "Soluciones"
        document.getElementById("navbar-productos").innerHTML = "<b>Productos</b>"
        document.getElementById("navbar-tratamientos").innerHTML = "Tratamientos"
        document.getElementById("navbar-lentesDeContacto").innerHTML = "Lentes De Contacto"
        document.getElementById("navbar-materiales").innerHTML = "Materiales"
        document.getElementById("navbar-servicios").innerHTML = "Servicios"
        document.getElementById("navbar-examenVista").innerHTML = "Examen de la Vista"
        document.getElementById("navbar-armazones").innerHTML = "<b>Armazones<b/>"
        document.getElementById("navbar-accesorios").innerHTML = "Accesorios"


        fetch("moduloArmazones/view_Armazones.html")
        .then(
                function(response){
                return response.text();
                }
        )
        .then(
                function(html){
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import ("../modulos/moduloArmazones/controller_Armazones.js").then(
                        function(controller){
                        moduloArmazones = controller;
                                moduloArmazones.cargarModuloCatalogoArmazon();
                        }
                );
                }
        );
}
function cargarModuloAccesorios(){
document.getElementById("navbar-home").innerHTML = "inicio"
        document.getElementById("navbar-empleados").innerHTML = "Empleados"
        document.getElementById("navbar-clientes").innerHTML = "Clientes"
        document.getElementById("navbar-soluciones").innerHTML = "Soluciones"
        document.getElementById("navbar-productos").innerHTML = "Productos"
        document.getElementById("navbar-tratamientos").innerHTML = "Tratamientos"
        document.getElementById("navbar-lentesDeContacto").innerHTML = "Lentes De Contacto"
        document.getElementById("navbar-materiales").innerHTML = "Materiales"
        document.getElementById("navbar-armazones").innerHTML = "Armazones"
        document.getElementById("navbar-servicios").innerHTML = "Servicios"
        document.getElementById("navbar-examenVista").innerHTML = "Examen de la Vista"
        document.getElementById("navbar-otros").innerHTML = "<b>Otros</b>"
        document.getElementById("navbar-accesorios").innerHTML = "<b>Accesorios</b>"


        fetch("moduloAccesorios/view_Accesorios.html")
        .then(
                function(response){
                return response.text();
                }
        )
        .then(
                function(html){
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import ("../modulos/moduloAccesorios/controller_Accesorios.js").then(
                        function(controller){
                        moduloAccesorios = controller;
                        moduloAccesorios.cargarModuloCatalogoAccesorios();
                        }
                );
                }
        );
}



function cargarModuloExamen(){
document.getElementById("navbar-home").innerHTML = "inicio"
        document.getElementById("navbar-empleados").innerHTML = "Empleados"
        document.getElementById("navbar-clientes").innerHTML = "Clientes"
        document.getElementById("navbar-soluciones").innerHTML = "Soluciones"
        document.getElementById("navbar-productos").innerHTML = "Productos"
        document.getElementById("navbar-tratamientos").innerHTML = "Tratamientos"
        document.getElementById("navbar-lentesDeContacto").innerHTML = "Lentes De Contacto"
        document.getElementById("navbar-materiales").innerHTML = "Materiales"
        document.getElementById("navbar-armazones").innerHTML = "Armazones"
        document.getElementById("navbar-servicios").innerHTML = "Servicios"
        document.getElementById("navbar-accesorios").innerHTML = "Accesorios"
        document.getElementById("navbar-servicios").innerHTML = "<b>Servicios</b>"
        document.getElementById("navbar-examenVista").innerHTML = "<b>Examen de la Vista</b>"

        fetch("moduloExamenVista/view_ExamenVista.html")
        .then(
                function(response){
                return response.text();
                }
        )
        .then(
                function(html){
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import ("../modulos/moduloExamenVista/controller_ExamenVista.js").then(
                        function(controller){
                        moduloExamenVista = controller;
                        moduloExamenVista.cargarModuloCatalogoExamenVista();

                        }
                );
                }
        );
}

