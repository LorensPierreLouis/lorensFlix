import styled from "styled-components";




const Lista=styled.li`
margin-top: 20px;
display: flex;
display: wrap;
flex-direction: column;
width: 330px;


iframe{
    border: solid 5px;
    border-radius: 20px 20px 0 0;
    width: 330px;
    height: 260.85px;
    top: 2.58px;
    
    opacity: 0px;
}

footer{
    display: flex;
    width: 339px;
    box-sizing: border-box;
   justify-content: space-between;
  padding-left:30px;
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
.borrar, .editar{
    width: 28%;
}
.borrar:hover, .editar:hover{
    width: 32%;
}

div:hover{
   
}

h2,h3,p{
    color: aliceblue;
}

p:hover{
    cursor: pointer;
    color: #105087;
    font-weight:600;
}
`


const Contenido= (props)=>{
    const {  titulo, imagen, video, descripcion,grupo,id}=props.datos
    const {Borde,eliminarPersona,persona, alEditarFormulario}=props
    const Border= {borderColor:Borde};
    return(
        <Lista>
        <h2>{titulo}</h2>
        <iframe style={Border} src={video} title={titulo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        <footer style={Border}>
        <div onClick={() => eliminarPersona(id)} >  <img   className="borrar"src="./img/borrar.png" alt="borrar" /> <p>Borrar</p></div>
        <div  onClick={()=>alEditarFormulario(persona)}><img className="editar" src="./img/editar.png" alt="cerrar" /> <p>Editar</p></div>
        </footer>
        <img  className="imagen" src={imagen} alt={titulo} />
        <p className="descripcion">{descripcion}</p>
     </Lista> 
    )
  
}

export default Contenido;