import styled from "styled-components";




const Lista=styled.li`
margin-top: 20px;
display: flex;
display: wrap;
flex-direction: column;



iframe{
    border: solid 5px;
    border-radius: 20px 20px 0 0;
    width: 429.19px;
    height: 260.85px;
    top: 2.58px;
    gap: 0px;
    opacity: 0px;

    
   
}

footer{
    display: flex;
    width: 438.5px;
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

.borrar:hover,.editar:hover{
width: 32%;
}

h2,h3,p{
    color: aliceblue;
}
`


const Contenido= (props)=>{
    const {  titulo, imagen, video, descripcion,grupo,id}=props.datos
    const {Borde,eliminarPersona,persona, alEditarFormulario}=props
    const Border= {borderColor:Borde};
    return(
        <Lista>
        <h2>{titulo}</h2>
        <iframe style={Border} src={video} title={titulo} frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <footer style={Border}>
        <div> <img   className="borrar"src="./img/borrar.png" alt="borrar" onClick={() => eliminarPersona(id)} /> <p>Borrar</p></div>
        <div><img className="editar" src="./img/editar.png" alt="cerrar"  onClick={()=>alEditarFormulario(persona)}/> <p>Editar</p></div>
        </footer>
        <img  className="imagen" src={imagen} alt={titulo} />
        <p className="descripcion">{descripcion}</p>
     </Lista> 
    )
  
}

export default Contenido;