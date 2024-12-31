import styled from "styled-components"
import Seleccion from "../Formulario/categoria"



const Section= styled.section`
display: flex;
justify-content:center;
width: ;




`

const FormEditar= styled.form`
  padding:30px 50px;
  display: flex;
  flex-direction: column;
  
  gap: 15px;
  width: 50%;
  padding-bottom: 40px;
  background-color: #03122F;
  border: solid 1px #6BD1FF;
  border-radius: 10px;


   
  h1,label{
    color: #FFFF;
  }

  aside{
    justify-content: end;
  }
   
  
  div,section{
    display: flex;
    flex-direction:column;
    gap: 5px;
  }

  input, select{
    max-width: 100%;
    line-height: 2rem;
    color:#FFFF;
    background-color:#0000;
    border: solid 1px #6BD1FF;
    outline:none;
    border-radius:5px;
  }

  
  

  footer{
    display: flex;
    gap:50px;
    justify-content: center;
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
        border-color:#6BD1FF;
        color: #6BD1FF;
        box-shadow: -1px -1px 5px 3px  rgb(90, 188, 231); 
    }

`

const Editar= (props)=>{

  const {  titulo, imagen, video,grupo,descripcion}=props.datos
   return (
    <Section>
      <FormEditar>
        <header>
            <h1>EDITAR CARD:</h1>
        </header> 
        
        <section>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input type="text" value={titulo} />
            </div> <br />
            <div>
              <Seleccion value={grupo} /> 
            </div> <br />
        </section>
        
        <section>
            <div>
                <label htmlFor="imagen">Imagen</label>
                <input type="text"  value={imagen}/>
            </div> <br />
            <div>
            <label htmlFor="video">Video</label>
            <input  type="text"  value={video}/>
            </div> <br />
        </section>
        
        <section>
            <label htmlFor="descriipcion">Descripcion del video</label>
        <input type="text"  value={descripcion}/>

        </section>  <br />
        
        <footer>
          <button type="submit">Guardar</button>
          <button type="reset">Limpiar</button>
        </footer>
          
      </FormEditar>
    </Section>
  )

}

export default Editar;