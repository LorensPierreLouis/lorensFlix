
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
    descripcion:"¿A veces cuando estás programando sientes dificuldades en saber en qué momento utilizar let, var o const para declarar una variable? En este video te sacamos estas dudas, además de explicarte lo que es escopo global y local en JavaScript.",
    imagen:"https://github.com/genesysaluralatam.png"
  },
  {
    id:"kfhnnr",
    titulo:"¿Qué es JavaScript?",
    grupo:"FRONT END",
    video:"https://www.youtube.com/embed/GJfOSoaXk4s",
    descripcion:"JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? Genesys y Gabriela nos hablan exactamente de esto en este Alura Tips.",
    imagen:"https://github.com/genesysaluralatam.png"
  },
  {
    id:"hhdn",
    titulo:"¿Cuáles son las principales áreas de la programación? ",
    grupo:"FRONT END",
    video:"https://www.youtube.com/embed/03cxUlwLVt4",
    descripcion:"¿Te gustaría trabajar en el mercado de tecnología? ¿No sabes cuál de las diversas áreas de la programación te gustaría aprender? Debido a la inmensa cantidad de lenguajes de programación te sientes confundida/o y no sabes por dónde empezar? Acompaña a nuestra instructora y descubre la respuesta a estas y otras interrogantes.",
    imagen:"https://github.com/genesysaluralatam.png"
  },
  
  {
    id:"JHF9854",
    titulo:"Equipo Front End",
    grupo:"FRONT END",
    video:"https://www.youtube.com/embed/rpvrLaBQwgg",
    descripcion:"En este video, Jeanmarie Quijada, instructora Front End en Alura Latam te explica qué hace el equipo de Front End.",
    imagen:"https://github.com/JeanmarieAluraLatam.png"
  },
  
  {
    id:"hhbbdnb",
    titulo:"¿Qué es la lógica de programación y cómo aplicarla?",
    grupo:"FRONT END",
    video:"https://www.youtube.com/embed/3W983Q2NzRI",
    descripcion:"En este video Christian Velazco, Ingrid Silva y Jeanmarie Quijada te guiarán en el camino que debes seguirHablarán acerca de la lógica de programación, como pensar de forma lógica y los conceptos que debes aprender, para dar tus primeros pasos en la programación.",
    imagen:"https://github.com/JeanmarieAluraLatam.png"
  },
  
  {
    id:"OONDNNBD",
    titulo:"Spring Framework. ¿Qué es ? ",
    grupo:"BACK END",
    video:"https://www.youtube.com/embed/t-iqt1b2qqk",
    descripcion:"Spring es el framework más usado de Java. Nos ofrece herramientas que nos permiten crear proyectos más avanzados, con mejores prácticas y en menor tiempo. También posee una gran comunidad, lo que nos brinda muchísima documentación y ayuda.",
    imagen:"https://github.com/JeanmarieAluraLatam.png"
  },
  
  {
    id:"HHDKF084",
    titulo:"¿Qué es SQL y NoSQL?",
    grupo:"BACK END",
    video:"https://www.youtube.com/embed/cLLKVd5CNLc",
    descripcion:"¿Cuáles son las diferencias entre una estructura de datos relacional (SQL) y una no relacional (NoSQL) y cuáles son las principales ventajas de cada una? Álvaro Camacho lo explica en este vídeo.",
    imagen:"https://github.com/JeanmarieAluraLatam.png"
  },
  
  {
    id:"JJFNBFPLS",
    titulo:"Simplificando tu código en Java: Conoce los enum",
    grupo:"BACK END",
    video:"https://www.youtube.com/embed/EoPvlE85XAQ",
    descripcion:"En este Alura+ la instructora Génesys Rondón nos enseña a simplificar esta tarea usando un tipo de dato especial llamado enum.",
    imagen:"https://github.com/JeanmarieAluraLatam.png"
  },
  {
  id:"MMKLI54",
  titulo:"¿Qué son las Soft Skills?",
  grupo:"INNOVACIÓN Y GESTIÓN",
  video:"https://www.youtube.com/embed/vhwspfvI52k&t=7s",
  descripcion:"¿Qué son las Softskills y por qué es tan importante desarrollarlas para posicionarse en el mercado laboral? En este video de Alura Tips, Pri Stuani nos habla de las habilidades más buscadas por las empresas en sus profesionales y cómo las Soft Skills te ayudan en el día a día.",
  imagen:"https://github.com/JeanmarieAluraLatam.png"
  },
  {
    id:"yjyyui45",
   titulo:"7 Soft Skills más demandadas de 2024",
   grupo:"INNOVACIÓN Y GESTIÓN",
   video:"https://www.youtube.com/embed/_-9grhDhxiU",
   descripcion:"Siempre estamos hablando aquí en el canal de Alura Latam sobre la importancia de las Soft Skills, y en este video vamos a listar las 7 habilidades blandas más demandadas por las empresas en este 2024.",
   imagen:"https://github.com/JeanmarieAluraLatam.png"
 
   },
   {
    id:"sgjjr667",
   titulo:"¿Qué son las metodologias ágiles?",
   grupo:"INNOVACIÓN Y GESTIÓN",
   video:"https://www.youtube.com/embed/6N3OkLCfK-0",
   descripcion:"En este video nuestra invitada, Andyara, nos explicará que són las muy conocidas hoy en día metodologias ágiles y nos comentará un poco sobre como aplicarlas y cuáles son los beneficios de utilizarlas en su equipo o empresa.",
   imagen:"https://github.com/JeanmarieAluraLatam.png"
 
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
   
      <Router>
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
