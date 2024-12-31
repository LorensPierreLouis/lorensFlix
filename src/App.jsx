
import ResetGlobal from './reset'
import styled from 'styled-components'
import Cabecera from './Componentes/Header'
import FormInput from './Componentes/Formulario/MainFormulario'
import Footer from './Componentes/Footer'
import Category from './Componentes/MainHome/Categorias'
import Dialog from './Componentes/MainHome/Dialogo'





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

const Background= styled.div`
  background: rgba(38, 38, 38, 1);
  width: 100%;
  min-height: 100vh;
`



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



function App() {


  const Grupo=[
    {
       
        titulo:"FRONT END",
        colorBorde:"rgba(107, 209, 255, 1)",
        colorBackground:"rgba(107, 209, 255, 1)"
    },
    {
      
        titulo:"BACK END",
        colorBorde:"rgba(0, 200, 111, 1)",
        colorBackground:"rgba(0, 200, 111, 1)"
    },
    {
      
        titulo:"INNOVACIÓN Y GESTIÓN",
        colorBorde:"rgba(255, 186, 5, 1)",
        colorBackground:"rgba(255, 186, 5, 1)"
    }
   ]

 

  const [colaboradores, actualizarColaboradores] =useState([{
    id:"jkjgdg",
    titulo:"Cuándo usar let, var y const? #AluraMás",
    grupo:"FRONT END",
    video:"https://www.youtube.com/embed/PztCEdIJITY",
    descripcion:"",
    imagen:""
  },
  {
    id:"kfhnnr",
    titulo:"¿Qué es JavaScript?",
    grupo:"FRONT END",
    video:"https://www.youtube.com/embed/GJfOSoaXk4s",
    descripcion:"",
    imagen:""
  },
  {
    id:"hhdn",
    titulo:"¿Cuáles son las principales áreas de la programación? ",
    grupo:"FRONT END",
    video:"https://www.youtube.com/embed/03cxUlwLVt4",
    descripcion:"",
    imagen:""
  },
  
  {
    id:"JHF9854",
    titulo:"Equipo Front End",
    grupo:"FRONT END",
    video:"https://www.youtube.com/embed/rpvrLaBQwgg",
    descripcion:"",
    imagen:""
  },
  
  {
    id:"hhbbdnb",
    titulo:"¿Qué es la lógica de programación y cómo aplicarla?",
    grupo:"FRONT END",
    video:"https://www.youtube.com/embed/3W983Q2NzRI",
    descripcion:"",
    imagen:""
  },
  
  {
    id:"OONDNNBD",
    titulo:"Spring Framework. ¿Qué es ? ",
    grupo:"BACK END",
    video:"https://www.youtube.com/embed/t-iqt1b2qqk",
    descripcion:"",
    imagen:""
  },
  
  {
    id:"HHDKF084",
    titulo:"¿Qué es SQL y NoSQL?",
    grupo:"BACK END",
    video:"https://www.youtube.com/embed/cLLKVd5CNLc",
    descripcion:"",
    imagen:""
  },
  
  {
    id:"JJFNBFPLS",
    titulo:"Simplificando tu código en Java: Conoce los enum",
    grupo:"BACK END",
    video:"https://www.youtube.com/embed/EoPvlE85XAQ",
    descripcion:"",
    imagen:""
  },

  {
    id:"yjyyui45",
   titulo:"7 Soft Skills más demandadas de 2024",
   grupo:"INNOVACIÓN Y GESTIÓN",
   video:"https://www.youtube.com/embed/_-9grhDhxiU",
   descripcion:"",
   imagen:"" 
   },
   {
    id:"sgjjr667",
   titulo:"¿Qué son las metodologias ágiles?",
   grupo:"INNOVACIÓN Y GESTIÓN",
   video:"https://www.youtube.com/embed/6N3OkLCfK-0",
   descripcion:"",
   imagen:"" 
   }
   
   
  


  
 ])


 const [PersonaSeleccionada, setPersonaSeleccionada] = useState(null)
  

  const AgregarPersonas=(persona)=>{
  console.log("Nueva persona",persona);
    //Spread operator
    actualizarColaboradores([...colaboradores, persona])
  }


  //Eliminar colaborador
  const eliminarPersona = (id) => {
    console.log("Eliminacion de 1 persona", id)
    const nuevosColaboradores = colaboradores.filter((persona) => persona.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Editar
  const editarPersona= (datos)=>{
    setPersonaSeleccionada(datos)
  }

  




  return (
   
      <Router >
       <Background>
        <ResetGlobal/>
        <Cabecera/>
        <Routes>
          <Route path='/' element={<Div> 
            <Main>
               <img src="/img/BannerMain.png" alt="Banner" />
            </Main>
          
            <Dialog 
            editarPersona={editarPersona}
            persona={PersonaSeleccionada}
            AgregarPersonas={AgregarPersonas}
            alCerrar={() => setPersonaSeleccionada(null)}/>
          

          {
            Grupo.map((categoria)=>{
                return  <Category datos={categoria} 
                key={categoria.titulo}
                colaboradores={colaboradores.filter(persona=> persona.grupo === categoria.titulo)}
                eliminarPersona={eliminarPersona}
                alEditarFormulario={persona => setPersonaSeleccionada(persona)}
                />
                
            })
           }
            
          </Div>}/>
          <Route path='/form' element= {<FormInput AgregarPersonas={AgregarPersonas}/>}/>
        </Routes>
        <Footer/>
        </Background>
      </Router>
    
  )  
}

export default App
