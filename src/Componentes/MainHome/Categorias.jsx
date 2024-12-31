import styled from "styled-components";
import Contenido from "./contenidos";



const Section= styled.section`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    margin-bottom:10px ;

    button{
    color: rgba(245, 245, 245, 1);
    font-family: Roboto; 
    font-size:1rem;
    font-weight:600;
    padding: 10px ;
    width:120px;
    border-radius: 15px;
    opacity: 0px;
    margin-bottom: -20px;
    }

   ol{
    list-style-position: inside;
    display: flex;
    flex-direction: row;
    align-content: baseline;
    gap: 20px;
    overflow-x: scroll;
    }

    //media tablet //
    @media (min-width:700px) {

     div{
        display: flex;
        justify-content: center;
     }
     button{
        padding: 15px;
        width:200px;
        text-align: center;
        white-space: nowrap;
        }
   
    }

    //media computer//
    @media (min-width:1200px) {
        div{
        display: flex;
        justify-content: start;
     }
     
   
    
    }
    

`


const Category= (props)=>{

    //destrucyuracion//
    const {colorBackground, colorBorde,titulo}=props.datos
    const {colaboradores,eliminarPersona,alEditarFormulario}=props;
    
    const colorBoton= {backgroundColor:colorBackground}
   
    return (
        colaboradores.length > 0 &&
    <Section>
        <div>
             <button type="text" style={colorBoton}>  {titulo}</button>
        </div>
        
        <ol>
       { colaboradores.map((persona,index)=>  <Contenido 
       datos={persona}
       key={index}
       eliminarPersona={eliminarPersona}
       alEditarFormulario={alEditarFormulario}
       persona={persona}
        Borde={colorBorde}/>)}
        </ol>
        
    </Section>
    )
}

export  default Category;