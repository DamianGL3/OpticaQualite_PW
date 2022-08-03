//Usuarios
let users = [
    //JSON formato de objetos para el paso de información con las API'S
    //clave
    {
        //valor
        "id": 1,
        "user": "admin",
        "pass": 1234
    }, {
        "id": 2,
        "user": "empleado",
        "pass": 1234
    },{
        "id": 3,
        "user": "Ricardo",
        "pass": 1234
    }
];

//Función de verificación de usuario
function login() {
    let user = document.getElementById('txtUser').value;
    let pass = parseInt(document.getElementById('txtPass').value);
    for (var i = 0; i < users.length; i++) {
        if (users[i].user === user && users[i].pass === pass) {
            document.getElementById("passMsg").innerHTML = "";
            window.location.href = "html/home.html";
            let usuarioLogeado = user;
            localStorage.setItem("userID", usuarioLogeado);

        } else if (users[i].user !== user && users[i].pass !== pass) {
            document.getElementById("passMsg").innerHTML = "Usuario o Contraseña Incorrecta";

        }
    }
}

