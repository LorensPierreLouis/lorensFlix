


const Category= (props)=>{
const { titulo, colorBackground, colorTexto}=props.datos;
 
const texto={color:colorTexto};
const background= {backgroundColor:colorBackground};
return (
<>
<h1 style={texto} >{titulo}</h1>
</>
)
}

export  default Category;