import styled from "styled-components"
import Editar from "./Edicion"
import Dialog from "./Dialogo"



const Div= styled.div`
display: flex;
flex-direction: column;
align-content: center;
`

const Main= styled.main`
margin: 0;

img{
    width: 100%;
    height: 40%;
}

`



const MainGeneral=()=>{
    return(
        <Div>
            <Main>
               <img src="./img/BannerMain.png" alt="Banner" />
            </Main>
            <Editar/>
            <Dialog/>
        </Div>
       
    )
}

export default MainGeneral;