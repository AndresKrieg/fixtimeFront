

import { parseJwt } from './tokenservice.js';
async function GetDatesByUserID(){
    try{
        const token=localStorage.getItem("jwt")
        const decode=parseJwt(token)
        user_id=decode.UsuarioID

        const response=await fetch("https://localhost:7190/api/Citas/ConsultarCitasPorClienteID/"+user_id,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
        });

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message || "Error al obtener las citas");
        }

        var listdate=await response.json()
        return listdate
    }catch(error){
        throw new Error(error.message);
    }  
    
}