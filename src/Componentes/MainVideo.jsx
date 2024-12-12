import styled from "styled-components"

const Formulario= styled.form`
  padding:30px 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  header{
    display: flex;
    flex-direction:column;
    gap:10px;
  }
   
  h1,h2,p,label{
    color: #FFFF;
  }
   
  h2{
    border-top: solid 1px ;
    border-bottom: solid 1px ;
    padding: 15px
  }

  h1,p{
    text-align: center;
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

const FormInput= ()=>{
   return (
     <Formulario>
       <header>
        <h1>NUEVO VIDEO</h1>
        <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
      </header> 
      <h2>Crear Tarjeta</h2>
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
        

     </Formulario>

   )

}

export default FormInput;