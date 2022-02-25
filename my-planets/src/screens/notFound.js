import React from  'react'
import { useNavigate } from 'react-router-dom'



const NotFound = () => {

    const navigate = useNavigate();

    return(
       <div>
           <h3>Página não encontrada!</h3>
           <button type='button' onClick={() => {
                navigate("/")}}>Voltar a Listagem</button>
       </div>
    )
}

export default NotFound