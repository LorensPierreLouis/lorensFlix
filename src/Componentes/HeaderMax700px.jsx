import styled from "styled-components";
import { Link } from "react-router-dom"
import { useState, React } from "react";
import { IoHome } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";



const Header= styled.header`
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 0px;
    background: rgba(25, 25, 25, 1);
   padding: 15px 0 10px 0;
    border-bottom: solid #2271D1;

    nav{
        display: flex;
        width: Hug (385.25px);
        Height: Hug (54px);
        gap: 25px;
        justify-content: center;
    }

    Link:hover{
      background-color:#2271D1;
    }
`

const ButtonCelular= styled.button`
    background-color: #262626;
    border: ${props=> props.$activo ?"solid 1.5px #cac2c2" : ""};
   text-align: baseline;
    padding: 5px 8px;
    border-radius: 19px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 10px;
 
    font-size:0.7rem;
    box-shadow: ${props=> props.$activo ?"-1px -1px 5px 3px  rgba(34, 113, 209, 0.7)" : "none"};
    border-color:  ${props=> props.$activo ?"#2271D1" : "#cac2c2 "};
    color:  ${props=> props.$activo ? "#2271D1" : "#ffff"};


  :hover{
    color: #2271D1;
  
  }

`





const CabeceraCelular = () => {
  const [activo, setActivo] = useState('home');
  const [mostrarTexto,setMostrarTexto]= useState(true)
  const [texto,setTexto]= useState('')
  
    const handleClick = (boton) => {
      setActivo(boton);
      setMostrarTexto(boton);
      setTexto(boton === 'home' ? 'HOME' : 'NUEVO VIDEO');

    };
  
    return (
      <Header>
      <nav>
          <Link to="/" onClick={() => handleClick('home')}>
            <ButtonCelular $activo={activo === 'home'}> 
            <IoHome className="iconos"  size={20}/> 
            {mostrarTexto && texto === 'HOME' && <span>{texto}</span>}
            </ButtonCelular>
          </Link>
          <Link to="/form" onClick={() => handleClick('nuevo')}>
            <ButtonCelular $activo={activo === 'nuevo'} className="texto">
            <FaRegPlusSquare  className="iconos"  size={20}/>
            {mostrarTexto && texto === 'NUEVO VIDEO' && <span>{texto}</span>}
            </ButtonCelular>
          </Link>
        </nav>

      </Header>
    );
  };

export default CabeceraCelular; 
