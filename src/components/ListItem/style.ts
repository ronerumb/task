import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}



export const Container = styled.div(({done}:ContainerProps) => (`
display:flex;
background-color:#20212C;
padding:10px;
border-radius:10px;
margin-bottom:10px;
align-items:center;
margin-top: 10px;
justify-content: space-between;

label{
    color: #ccc;
    text-decoration: ${done ? 'line-through' : 'initial'};
    text-align:center;
    justify-content: center;

}
input{
    width: 25px;
    height: 25px;
   
}


`

))








