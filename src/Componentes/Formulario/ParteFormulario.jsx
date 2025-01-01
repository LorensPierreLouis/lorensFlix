
import styled from "styled-components";



const Div= styled.div`
    margin: 7px 0;
    label,input{
        color:#FFFF;
        display: block;
        font-family: Source Sans Pro;
        font-size:1rem ;
        font-weight: 600;
        line-height: 24px;
        text-align: left;
    }


    input{
    font-size: 0.7rem;
    border: none;
    background-color:rgba(25, 25, 25, 1);
    color: #FFFF;
    outline:none;
    padding: 5px 10px;
    width: 100%;
    box-sizing: border-box;
    }

    input:focus{
        color:rgba(229, 57, 53, 1);
        border: solid 1px rgba(229, 57, 53, 1);
    }

    /*PANTALLA GRANDE*/
    @media (min-width:700px) {
        
        input{
            width: 50%;
            
        }  
    }
`



const InputLabel= (props)=>{

    const cambioInput= (e)=>{
        props.actualizarDato(e.target.value)
    }
    
    return<Div>
    <label> {props.titulo}</label>
    <input type="text" placeholder={props.placeholder} required value={props.dato} onChange={cambioInput}/>

    </Div>
}

export default InputLabel;



