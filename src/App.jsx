
import ResetGlobal from './reset'
import styled from 'styled-components'
import Cabecera from './Componentes/Header'
import MainGeneral from './Componentes/MainHome/MainG'
import FormInput from './Componentes/Formulario/MainFormulario'
import Footer from './Componentes/Footer'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Background= styled.div`
  background: rgba(38, 38, 38, 1);
  width: 100%;
  min-height: 100vh;
`
function App() {
 

  return (
   
      <Router>
       <Background>
        <ResetGlobal/>
        <Cabecera/>
        <Routes>
          <Route path='/' element={<MainGeneral/>}/>
          <Route path='/form' element= {<FormInput/>}/>
        </Routes>
        <Footer/>
        </Background>
      </Router>
    
  )  
}

export default App
