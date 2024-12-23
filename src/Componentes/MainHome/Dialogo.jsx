
import styled from "styled-components";
import Editar from "./Edicion";


const Overlay = styled.div`
background-color:rgba(0,0,0,.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`



const Dialog= ({persona,alCerrar})=>{

    return <>
    
        { persona && <>
          <Overlay/>
            <dialog open ={!!persona} onClose={alCerrar}>
                <Editar persona={persona}/>
                <form method="dialog">
                    <button>
                        LOrens
                    </button>
               
                </form>
            </dialog>
       
        </>}
        
        
     </>


    
}

export default Dialog;