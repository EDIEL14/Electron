function cambiarColorFondo() {
    var body = document.body;

    // Verificar el tema actual y cambiar al tema opuesto
    if (body.classList.contains('tema-claro')) {
        body.classList.remove('tema-claro');
        body.classList.add('tema-oscuro');
    } else {
        body.classList.remove('tema-oscuro');
        body.classList.add('tema-claro');
    }
}