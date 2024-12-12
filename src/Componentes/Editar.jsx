import styled from "styled-components"



const FormEditar= styled.form`
  padding:30px 50px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  gap: 15px;
  width: 50%;
  background-color: #093367;
  
  
   
  h1,label{
    color: #FFFF;
  }
   
  

 
  
  div,section{
    display: flex;
    flex-direction:column;
    gap: 5px;
  }

  input, select{
    max-width: 50%;
    line-height: 2rem;
    color:#FFFF;
    background-color:#0000;
    border: solid 1px;
    outline:none;
    border-radius:5px;
  }

  input:focus, select:focus, select:hover,input:hover{
  color: #a93630;
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

const Editar= ()=>{
   return (
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

   )

}

export default Editar;