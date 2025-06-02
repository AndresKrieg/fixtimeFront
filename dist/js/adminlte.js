  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav");

    const token = localStorage.getItem("jwt");

    if (!token) {
        nav.innerHTML = `<p>No se ha iniciado sesión.</p>`;
        return;
    }

    const payload = parseJwt(token);
    const user_role = payload.role;

    switch (user_role) {
        case "Administrador":
        nav.innerHTML = `
            <ul class="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                <li class="nav-item"><a href="miCitas.html" class="nav-link"><i class="bi bi-house-door"></i><p>Inicio</p></a></li>
                <li class="nav-item"><a href="registrarcst.html" class="nav-link"><i class="bi bi-gear"></i><p>Registrar Taller</p></a></li>
                <li class="nav-item"><a href="actualizardatos.html" class="nav-link"><i class="bi bi-clipboard2-data"></i><p>Actualizar Datos</p></a></li>
            </ul>
        `;
        break;
        case "Cliente":
        nav.innerHTML = `
            <ul class="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                <li class="nav-item"><a href="miCitas.html" class="nav-link"><i class="bi bi-house-door"></i><p>Inicio</p></a></li>
                <li class="nav-item"><a href="agendar.html" class="nav-link"><i class="bi bi-calendar-date"></i><p>Agendar Cita</p></a></li>
                <li class="nav-item"><a href="MiVehiculos.html" class="nav-link"><i class="bi bi-car-front-fill"></i><p>Mis Vehículos</p></a></li>
                <li class="nav-item"><a href="actualizardatos.html" class="nav-link"><i class="bi bi-clipboard2-data"></i><p>Actualizar Datos</p></a></li>
            </ul>
        `;
        break;
        case "Recepcionista":
        nav.innerHTML = `
            <ul class="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                <li class="nav-item"><a href="miCitas.html" class="nav-link"><i class="bi bi-calendar-date"></i><p>Citas Agendadas</p></a></li>
                <li class="nav-item"><a href="actualizardatos.html" class="nav-link"><i class="bi bi-clipboard2-data"></i><p>Actualizar Datos</p></a></li>
            </ul>
        `;
        break;
        default:
        nav.innerHTML = `<p>Rol desconocido.</p>`;
    }
    });
