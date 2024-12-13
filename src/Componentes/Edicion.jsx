import styled from "styled-components"


const Section= styled.section`
display: flex;
justify-content:center;
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

const Editar= ()=>{
   return (
    <Section>
      <FormEditar>
        <aside>
            <img src="./img/cerrar.png" alt="icono-cerrar" />
        </aside>
        
        <header>
            <h1>EDITAR CARD:</h1>
        </header> 
        
        <section>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input type="text"  placeholder="ingrese el titulo"/>
            </div> <br />
            <div>
                <label htmlFor="categoria">Categoria</label>
                <select>
                <option value="seleccion"> Seleccionar</option>
                </select>
            </div> <br />
        </section>
        
        <section>
            <div>
                <label htmlFor="imagen">Imagen</label>
                <input type="text"  placeholder="el enlace es obligatorio"/>
            </div> <br />
            <div>
            <label htmlFor="video">Video</label>
            <input  type="text"  placeholder="ingrese el enlace del video"/>
            </div> <br />
        </section>
        
        <section>
            <label htmlFor="descriipcion">Descripcion del video</label>
        <input type="text"  placeholder="¿De que se trata el video?" />

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