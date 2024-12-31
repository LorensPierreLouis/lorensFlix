
import styled from "styled-components";
import FormularioEdit from "./formEdicion/FormEdit";





const Overlay = styled.div`
background-color:rgba(0,0,0,.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const Dialogo=styled.dialog`
 margin-top: 70%;
 background-color: #03122F;
 border: solid 1px #6BD1FF;
  border-radius: 10px;

  
    .cerrar {
      position: relative;
      top:-23px;
      left: 365px;
    
    }
  

  img {
  width: 20px;
  height: 20px;
}
`


const Dialog = (props)=>{
  const {persona,alCerrar,AgregarPersonas,editarPersona}=props;

    return <>
    
        { persona && <>
          <Overlay/>
            <Dialogo open ={!!persona} onClose={alCerrar}>
                <form method="dialog">
                  <button className="cerrar">
                  <img src="./img/cerrar.png" alt="foto" />
                  </button>
                </form>
               <FormularioEdit
                  AgregarPersonas={AgregarPersonas}
                 persona={persona}
                 editarPersona={editarPersona}
                 />
                
            </Dialogo>
       
        </>}
        
        
     </>


    
}

export default Dialog;