import styled from "styled-components";


const Section= styled.section`
    display: flex;
    padding: 20px;
    margin-bottom:15px;
    button{
    color: rgba(245, 245, 245, 1);
    font-family: Roboto; 
    font-size:1rem;
    font-weight:600;
    padding: 15px;
    width: 20%;
    border-radius: 15px;
    opacity: 0px;}


`

const Category= (props)=>{

    //destrucyuracion//
    const {colorBackground, titulo}=props.datos
    
    const colorBoton= {backgroundColor:colorBackground}
    return (
    <Section>
        <button type="text" style={colorBoton}>  {titulo}</button>
    </Section>
    )
}

export  default Category;