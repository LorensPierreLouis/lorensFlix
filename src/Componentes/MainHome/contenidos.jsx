import styled from "styled-components";




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

.imagen,h2{
    visibility: hidden;
}
.descripcion{
    visibility: hidden;
}

div{
    display: flex;
    gap: 5px;
    align-items: center;
}

h2,h3,p{
    color: aliceblue;
}
`


const Contenido= (props)=>{
    const {  titulo, imagen, video, descripcion}=props.datos
    const {Borde}=props
    const Border= {borderColor:Borde};
    return(
        <Lista>
        <h2>{titulo}</h2>
        <iframe style={Border} src={video} title={titulo} frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <footer style={Border}>
        <div> <img src="./img/borrar.png" alt="borrar" /> <p>Borrar</p></div>
        <div><img src="./img/editar.png" alt="cerrar" /> <p>Editar</p></div>
        </footer>
        <img  className="imagen" src={imagen} alt={titulo} />
        <p className="descripcion">{descripcion}</p>
     </Lista> 
    )
  
}

export default Contenido;