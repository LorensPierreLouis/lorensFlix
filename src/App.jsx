
import ResetGlobal from './reset'
import styled from 'styled-components'
import Cabecera from './Componentes/Header'
import FormInput from './Componentes/Formulario/MainFormulario'
import Footer from './Componentes/Footer'
import Category from './Componentes/MainHome/Categorias'
import Editar from './Componentes/MainHome/Edicion'
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
  const [colaboradores, actualizarColaboradores] =useState([])
 
  const AgregarPersonas=(persona)=>{
  console.log("Nueva persona",persona);
    //Spread operator
    actualizarColaboradores([...colaboradores, persona])

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
            <Editar/>
            <Dialog/>
          {
            Grupo.map((categoria)=>{
                return  <Category datos={categoria} 
                key={categoria.titulo}
                colaboradores={colaboradores.filter(persona=> persona.grupo === categoria.titulo)}
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
