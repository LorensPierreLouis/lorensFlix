import styled from "styled-components";


const PiePagina=styled.footer`
background-color: rgba(0, 0, 0, 0.9);
border-top: solid 1px rgba(34, 113, 209, 1);
box-shadow: 0 5px 29px 0 rgba(34, 113, 209, 0.7);
display:flex;
justify-content:center;
margin-top:20px;
padding: 30px;

img{
    max-width: 200px;
}
`

const Footer=()=> {

    return  <PiePagina> <img src="img/logo.png" alt="logo de la Alura" /></PiePagina>;
}
export default Footer