import styled from "styled-components"
import InputLabel from "./ParteFormulario"
import Seleccion from "./categoria"
import { useState } from "react"
import { v4 as uuid } from "uuid"


const Formulario= styled.form`
  padding:30px 50px 100px 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  
  header{
    display: flex;
    flex-direction:column;
    gap:10px;
  }
   
  h1,h2,p{
    color: #FFFF;
    text-align: center;
    font-family: Roboto; 
    text-decoration-skip-ink: none;
  }

  h1{
    font-size:1.3rem;
    font-weight:600
  }

  p{
    font-size:0.7rem;
    font-weight:300;
    padding-top: 10px;
  }

   
  h2{
    border-top: solid 1px ;
    border-bottom: solid 1px ;
    padding: 15px;
    font-size: 1.1rem;
    font-weight: 500;
    text-align: left;

  }



  footer{
    display: flex;
    gap:20px;
  }

  button{
    color: #ffff;
      border: solid 1.5px #cac2c2 ;
      padding: 5px 10px;
      border-radius: 10px;
      width: 150px;
      font-size: 0.8rem;
    }

    button:active,  button:hover{
        border-color:#2271D1;
        box-shadow: -1px -1px 5px 3px  rgba(34, 113, 209, 0.7); 
    }

    /*PANTALLA GRANDE*/
    @media (min-width:700px) {
      h1{
      font-size:1.8rem;
      font-weight:600
      }
      p{
        font-size:1rem;
        font-weight:300
      }
      h2{
   
      font-size: 1.5rem;
    }
  }

`
/*descripcion*/
const Div= styled.div`
  margin: 7px 0;
  label,input{
    color:#FFFF;
    display: block;
    font-family: Source Sans Pro;
    font-size:1rem ;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
  }


  input{
  font-size: 0.7rem;
  border: none;
  background-color:rgba(25, 25, 25, 1);
  color: #FFFF;
  outline:none;
  text-align: start;
  width: 100%;
  padding: 10px;
  height: 200px;
  }

  input::placeholder{
  text-align: start;
  }
  input:focus{
    color:rgba(229, 57, 53, 1);
    border: solid 1px rgba(229, 57, 53, 1);
  }

    /*PANTALLA GRANDE*/
    @media (min-width:700px) {
      input{
        width: 35%;
      }
    }
`

const Descripcion= (props)=>{
    const cambioInput= (e)=>{
      props.actualizarDato(e.target.value)
  }
  return (
    <Div>
    <label htmlFor="">Descripción</label>
    <input type="text" placeholder="Ingrese la descripción del video" 
    value={props.dato} 
    onChange={cambioInput}/>
    </Div>
  )
}




const FormInput= (props)=>{
  //para manejar los input
 const [titulo,actualizarTitulo]=useState("");
 const [grupo,actualizarCategoria]=useState("");
 const [imagen,actualizarImagen]=useState("");
 const [video,actualizarVideo]=useState("");
 const [descripcion,actualizarDescripcion]=useState("");
 const {AgregarPersonas}=props;

   //prevenir recarga//
  const prevenirRecarga= (e)=>{
    e.preventDefault()
    console.log("Prevención recarga")
    let datos= {
                titulo,
                grupo,
                imagen,
                video,
                descripcion,
                id:uuid()
  }
    AgregarPersonas(datos);
 }

 //reiniciar el formulario
 const reiniciarFormulario = () => {
  actualizarTitulo("")
  actualizarCategoria ("")
  actualizarImagen("")
  actualizarVideo("")
  actualizarDescripcion("")
}
  
  
  
   return (
     <Formulario onSubmit={prevenirRecarga} onReset={prevenirRecarga}>
       <header>
        <h1>NUEVO VIDEO</h1>
        <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
      </header> 
      <h2>Crear Tarjeta</h2>
      <InputLabel titulo="Titulo"
       placeholder="Ingrese el título"
       dato={titulo} 
       actualizarDato={actualizarTitulo}
       />
      <Seleccion 
      dato={grupo} 
      actualizarCategoria={actualizarCategoria}
      />
      <InputLabel 
      titulo="Imagen" 
      placeholder="Ingrese la imagen"
      dato={imagen} 
      actualizarDato={actualizarImagen}
      />
      <InputLabel 
      titulo="Video" 
      placeholder="Ingrese el video"
      dato={video} 
      actualizarDato={actualizarVideo}
      />

      <Descripcion
      dato={descripcion} 
      actualizarDato={actualizarDescripcion}
      />
      <footer>
        <button type="submit">Guardar</button>
        <button  type="reset" onClick={reiniciarFormulario}>Limpiar</button>
      </footer>
        

     </Formulario>

   )

}

export default FormInput;

