import styled from "styled-components";



// Parte de la selección//
const DivSelect = styled.div`
margin: 7px 0;
label{
    color:#FFFF;
    display: block;
    font-family: Source Sans Pro;
    font-size:1rem ;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
}


Select{
font-size: 0.7rem;
border: none;
background-color:rgba(25, 25, 25, 1);
color: #FFFF;
outline:none;
padding: 10px 10px;
width: 50%;
}
select:focus{
    color:rgba(229, 57, 53, 1);
    border: solid 1px rgba(229, 57, 53, 1);
}

option{
    font-family: Source Sans Pro;
    font-size: 0.7rem;
    font-weight: 600;
    line-height: 24px;
}


`

const Seleccion= (props)=>{

    //Arreglo//
   const categorias= [
    "FRONT END",
    "BACK END",
    "INNOVACIÓN Y GESTION"
    ]

   
        const cambioCategoria= (e)=>{
          props.actualizarCategoria(e.target.value)
      }

  return (

    <DivSelect>
    <label htmlFor="categoria">Categoría</label>
    <select  value={props.dato} onChange={cambioCategoria}>
       <option value="" disabled defaultValue="" hidden>Seleccionar Categoria</option>
     {categorias.map((categoria,index)=>{
        return <option key={index} value={categoria}> {categoria}</option>
     })}
    </select>
    
    </DivSelect>
  )
}

export default Seleccion;
