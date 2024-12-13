import styled from "styled-components";
import { Link } from "react-router-dom"
import { useState } from "react";


const Header= styled.header`

    background: #262626;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
    border-bottom: solid #2271D1;

    img{
        width:  90px;
        height: 40px;
    
    }

    nav{
        display: flex;
        width: Hug (385.25px);
        Height: Hug (54px);
        gap: 25px;

    }

   


`

const Button= styled.button`
    background-color: #262626;
    border: solid 1.5px #cac2c2 ;
    padding: 5px 10px;
    border-radius: 10px;
    width: 150px;
    font-size: 0.8rem;
    box-shadow: ${props=> props.$activo ?"-1px -1px 5px 3px  rgba(34, 113, 209, 0.7)" : "none"};
    border-color:  ${props=> props.$activo ?"#2271D1" : "#cac2c2 "};
    color:  ${props=> props.$activo ? "#2271D1" : "#ffff"};


  :hover{
      color: #2271D1;
      border-color:#2271D1;
      
  }

   

    
`



const Cabecera = () => {
    const [activo, setActivo] = useState('home');
  
    const handleClick = (boton) => {
      setActivo(boton);
    };
  
    return (
      <Header>
        <img src="img/logo.png" alt="logo de la Alura" />
  
        <nav>
          <Link to="/" onClick={() => handleClick('home')}>
            <Button $activo={activo === 'home'}>HOME</Button>
          </Link>
          <Link to="/form" onClick={() => handleClick('nuevo')}>
            <Button $activo={activo === 'nuevo'}>NUEVO VIDEO</Button>
          </Link>
        </nav>
      </Header>
    );
  };

export default Cabecera; 