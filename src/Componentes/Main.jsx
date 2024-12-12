import styled from "styled-components"


const Main= styled.main`
margin: 0;

img{
    width: 100%;
    height: auto;
}


`



const MainGeneral=()=>{
    return(
        <Main>
         <img src="./img/BannerMain.png" alt="Banner" />
        </Main>
    )
}

export default MainGeneral;