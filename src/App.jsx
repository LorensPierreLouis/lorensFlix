
import ResetGlobal from './reset'
import styled from 'styled-components'
import Cabecera from './Componentes/Header'
import MainGeneral from './Componentes/Main'
import FormInput from './Componentes/MainVideo'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Background= styled.div`
  background: #000000;
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
      <Editar/>
      
    </Background>
    </Router>
  )
}

export default App
