import styled from "styled-components";
import Contenido from "./contenidos";



const Section= styled.section`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom:15px;

    button{
    color: rgba(245, 245, 245, 1);
    font-family: Roboto; 
    font-size:1rem;
    font-weight:600;
    white-space: nowrap;
    padding: 15px;
    width:200px;
    border-radius: 15px;
    opacity: 0px;
    }
ol{
   
     list-style-position: inside;
    display: flex;
    flex-direction: row;
    gap: 20px;
    overflow-x: scroll;
;
    
}

`


const Category= (props)=>{

    //destrucyuracion//
    const {colorBackground, titulo,colorBorde,grupo}=props.datos
    const {colaboradores}=props;
    
    const colorBoton= {backgroundColor:colorBackground}
   
    return (
        colaboradores.length > 0 &&
    <Section>
         <button type="text" style={colorBoton}>  {titulo}</button>
        <ol>
       
       { colaboradores.map((persona,index)=>  <Contenido 
       datos={persona}
       key={index}
        Borde={colorBorde}/>)}
        </ol>
        
    </Section>
    )
}

export  default Category;