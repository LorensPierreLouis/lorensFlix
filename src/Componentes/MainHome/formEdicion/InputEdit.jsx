
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
        max-width: 100%;
        line-height: 2rem;
        color:#FFFF;
        background-color:#0000;
        border: solid 1px #6BD1FF;
        outline:none;
        border-radius:5px;
    }
    

    input:focus{
        color:rgba(229, 57, 53, 1);
        border: solid 1px rgba(229, 57, 53, 1);
    }

`



const InputLabelEdit= (props)=>{

    const cambioInput= (e)=>{
        props.actualizarDato(e.target.value)
    }
    
    return<Div>
    <label> {props.titulo}</label>
    <input type="text"  required value={props.dato} onChange={cambioInput}/>

    </Div>
}

export default InputLabelEdit;



