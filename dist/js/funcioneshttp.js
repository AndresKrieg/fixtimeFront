<script src="js/tokenservice.js"></script>

export  async function GetMyVehicles(id,token) {
    try{

        const response=await fetch(`http://localhost:5280/api/Vehiculo/ObtenerVehiculoPorClienteID/${id}`,{
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });

        if(response.status==200){
            return await response.json();
        }
        else{
            alert("No se han logrado obtener los vehiculos que tienes registrados");
        }

    }catch(error){
        alert("No se han logrados obtener los datos de tus vehiculos"+error.message)
    }
}

export  async function UpdateStateByAppointment(id,estadoDTO,token) {
    try{
        const response=await fetch(`http://localhost:5280/api/Citas/ActualizarEstadoCita/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authentication":"Bearer "+token
            },
            body:JSON.stringify(estadoDTO)
        });

        if(response.status==200){
            return await response.json();
        }
        else{
            return null;
        }

    }catch(error){
        alert("No se han logrado modificar el estado de la cita "+error.message);
        return null;

    }
    
}

export default async function RecuperarContraseña(ForgotPasswordRequest) {
    try{
        const response=await fetch("http://localhost:5280/api/Usuarios/RecuperarContraseña",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(ForgotPasswordRequest)
        });

        if(response.status==200){
            return await response.json();
        }
        else{
           return null;
        }

    }catch(error){
            alert("No se han encontrado el correo"+error.message);
    }
    
}

