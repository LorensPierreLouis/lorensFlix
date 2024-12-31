import styled from "styled-components"
import { useState } from "react"
import InputLabelEdit from "./InputEdit"
import SeleccionEdit from "./SeccionInput"


const Formulario= styled.form`
  padding:5px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 40px;
  background-color: #03122F;
  height: 80vh;
  

  
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
    font-size:1.5rem;
    font-weight:600
  }
  p{
    font-size:1rem;
    font-weight:300
  }

   
  h2{
    border-top: solid 1px ;
    border-bottom: solid 1px ;
    padding: 15px;
    font-size: 1.5rem;
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

`










const FormularioEdit= (props)=>{

  const { persona,AgregarPersonas } = props;

  //para manejar los input
 const [titulo,actualizarTitulo]=useState(persona.titulo);
 const [grupo,actualizarCategoria]=useState(persona.grupo);
 const [imagen,actualizarImagen]=useState(persona.imagen);
 const [video,actualizarVideo]=useState(persona.video);
 const [descripcion,actualizarDescripcion]=useState(persona.descripcion);

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
                id:persona.id
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
       <h1>EDITAR CARD:</h1>
      </header> 
      
      <InputLabelEdit titulo="Titulo"
       placeholder="Ingrese el título"
       dato={titulo} 
       actualizarDato={actualizarTitulo}
       />
      <SeleccionEdit
      dato={grupo} 
      actualizarCategoria={actualizarCategoria}
      />
      <InputLabelEdit
      titulo="Imagen" 
      dato={imagen} 
      actualizarDato={actualizarImagen}
      />
      <InputLabelEdit
      titulo="Video" 
      
      dato={video} 
      actualizarDato={actualizarVideo}
      />

      <InputLabelEdit
       titulo="Descripción" 
      dato={descripcion} 
      actualizarDato={actualizarDescripcion}
      />
      <footer>
        <button type="submit">Guardar</button>
        <button type="reset" onClick={reiniciarFormulario}>Limpiar</button>
      </footer>
        

     </Formulario>
    
   )

}

export default FormularioEdit;

