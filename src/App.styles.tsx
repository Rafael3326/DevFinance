import styled from "styled-components";



export const Container = styled.div`

`;


export const Header= styled.div`
background-color:darkblue;
height:150px;
text-align: center;
@media( max-width:700px){
height: 100px;
 
}
`;

export const HeaderText= styled.h1`
margin:0;
padding: 0;
color: #fff;
padding-top: 30px;
@media( max-width:700px){
font-size: 20px;
 
}
`;

export const Body= styled.div`
margin:auto;
max-width: 980px;

min-height: 600px;
margin-bottom: 50px;

@media( max-width:1000px){
    max-width: 700px;
     
    }

@media( max-width:700px){
max-width: 450px;
 
}
@media( max-width:480px){
max-width: 340px;
}
`;

export const InputRes = styled.div<{response:boolean}>`
  div{
      
      display:none;
      &:hover{
          
          background-color: darkblue;
        
            }
  }

  @media(max-width:700px){

    div{
        display: ${props=>props.response?'none':'block'};
        font-size: 14px;
        background-color:blue;
        align-items: center;
        justify-content: center;
        width: 180px;
        color: white;
        cursor: pointer;
        border-radius: 10px;
        margin-top: 20px;
        padding: 10px;

        a{
          text-decoration:none;
          color: white;
        }
    }
  }
  @media(max-width:450px){
      div{
      font-size: 14px;
      width: 160px;
      border-radius: 5px;
      padding: 5px;
      margin-left: 20px;

      a{
          text-decoration:none;
          color: white;
        }
   
      }


      
  } 
`;