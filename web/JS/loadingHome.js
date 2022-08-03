$(window).on("load", function () {
    setTimeout(function () {
        $(".spinner-wrapper").fadeOut("slow");
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Bienvenido ' + userF +  '!'
        })
    }, 500);
});

function cerrarSesion() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: '¿Estás seguro de cerrar sesión?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, cerrar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                    'Cerrando Sesión!'
                    );

            window.location.href = "../index.html";
        } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
                ) {
            swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Tu sesión se mantuvo abierta!.',
                    );
        }
    });
}


function idLogin() {
    if (localStorage.getItem("userID") == "empleado") {
        user = '<img src="../recursos/menu/user.png" style="height: 1.5em; margin-right: .5em;">' + "Empleado";
        document.getElementById("loggin-id").innerHTML = user;
        userF = user.slice(80);
    } else if (localStorage.getItem("userID") == "admin") {
        user = '<img src="../recursos/menu/user.png" style="height: 1.5em; margin-right: .5em;">' + "Administrador";
        document.getElementById("loggin-id").innerHTML = user;
        
        userF = user.slice(80);

    }
}

idLogin();