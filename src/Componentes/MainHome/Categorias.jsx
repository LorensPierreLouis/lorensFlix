import styled from "styled-components";



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
    
}

`

const Lista=styled.li`
margin-top: 20px;
display: flex;
display: wrap;
flex-direction: column;



iframe{
    border: solid 5px;
    border-radius: 20px 20px 0 0;
    width: 300px;
    height: 300px;
   
}

footer{
    display: flex;
    width: 309px;
    box-sizing: border-box;
   justify-content: space-between;
   padding:10PX  40px 20px ;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 0 0 20px 20px ;
    border: solid 5px;
    
}

img{
    width: 30%;
}

div{
    display: flex;
    align-items: baseline;
}

h2,h3,p{
    color: aliceblue;
}
`


const Category= (props)=>{

    //destrucyuracion//
    const {colorBackground, titulo,colorBorde}=props.datos
    
    const colorBoton= {backgroundColor:colorBackground}
    const Border= {borderColor:colorBorde};
    return (
    <Section>
         <button type="text" style={colorBoton}>  {titulo}</button>
        <ol>
       
        <Lista>
            <iframe style={Border} src="https://www.youtube.com/embed/4Ltu1zLNV58" title="" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <footer style={Border}>
               <div> <img src="./img/borrar.png" alt="borrar" /> <p>Borrar</p></div>
               <div><img src="./img/editar.png" alt="cerrar" /> <p>Editar</p></div>
           
            </footer>


        </Lista>
        <Lista>
            <iframe style={Border} src="https://www.youtube.com/embed/4Ltu1zLNV58" title="" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <footer style={Border}>
               <div> <img src="./img/borrar.png" alt="borrar" /> <p>Borrar</p></div>
               <div><img src="./img/editar.png" alt="cerrar" /> <p>Editar</p></div>
           
            </footer>


        </Lista>
        <Lista>
            <iframe style={Border} src="https://www.youtube.com/embed/4Ltu1zLNV58" title="" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <footer style={Border}>
               <div> <img src="./img/borrar.png" alt="borrar" /> <p>Borrar</p></div>
               <div><img src="./img/editar.png" alt="cerrar" /> <p>Editar</p></div>
           
            </footer>


        </Lista>
        <Lista>
            <iframe style={Border} src="https://www.youtube.com/embed/4Ltu1zLNV58" title="" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <footer style={Border}>
               <div> <img src="./img/borrar.png" alt="borrar" /> <p>Borrar</p></div>
               <div><img src="./img/editar.png" alt="cerrar" /> <p>Editar</p></div>
           
            </footer>


        </Lista>
        <Lista>
            <iframe style={Border} src="https://www.youtube.com/embed/4Ltu1zLNV58" title="" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <footer style={Border}>
               <div> <img src="./img/borrar.png" alt="borrar" /> <p>Borrar</p></div>
               <div><img src="./img/editar.png" alt="cerrar" /> <p>Editar</p></div>
           
            </footer>


        </Lista>
        <Lista>
            <iframe style={Border} src="https://www.youtube.com/embed/4Ltu1zLNV58" title="" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <footer style={Border}>
               <div> <img src="./img/borrar.png" alt="borrar" /> <p>Borrar</p></div>
               <div><img src="./img/editar.png" alt="cerrar" /> <p>Editar</p></div>
           
            </footer>


        </Lista>

        </ol>
        
    </Section>
    )
}

export  default Category;