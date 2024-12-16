import styled from "styled-components"
import Editar from "./Edicion"
import Dialog from "./Dialogo"
import Category from "./Categorias"

import { useState } from "react"



const Div= styled.div`
display: flex;
flex-direction: column;
align-content: center;
`

const Main= styled.main`
margin: 0;

img{
    width: 100%;
    height: 40%;
}

`



const MainGeneral=()=>{
    
    const [categorias,actualizarCategorias]=useState([
        {
           
            titulo:"FRONT END",
            colorTexto:"rgba(245, 245, 245, 1)",
            colorBackground:"rgba(107, 209, 255, 1)"
        },
        {
           
            titulo:"BACK END",
            colorTexto:"rgba(245, 245, 245, 1)",
            colorBackground:"rgba(0, 200, 111, 1)"
        },
        {
           
            titulo:"INNOVACIÓN Y GESTIÓN",
            colorTexto:"rgba(245, 245, 245, 1)",
            colorBackground:"rgba(255, 186, 5, 1)"
        },
    ])


    return(
        <Div>
            <Main>
               <img src="./img/BannerMain.png" alt="Banner" />
            </Main>
            <Editar/>
            <Dialog/>
            {
                categorias.map((categoria)=> <Category
                datos={categoria}
                key={categoria.titulo}
                /> )
            }
        </Div>
       
    )
}

export default MainGeneral;