import styled from "styled-components";



export const Container = styled.div`
background-color:white;
box-shadow: 0 0 5px #ccc;
border-radius: 10px;
padding: 20px;
margin-top: 20px;
display: flex;
  
  label{
    margin-left: 20px;
    margin-right: 10px;
    font-weight: bold;
    font-size: 20px;
  }

  .inputPrice{

    width: 80px;
    margin-right: 10px;
    border-radius: 5px;
    outline: 0;
    font-size: 20px;

    &:hover{
      background-color: rgba(220,220,220);
      
    }
  }


  .description{
    width: 200px;
    height: 30px;
    border-radius: 5px;
    outline: 0;
    font-size: 20px;
    &:hover{
      background-color: rgba(220,220,220);
      
    }

  }
   button {
     font-size: 18px;
     border-radius: 8px;
     outline: 0;
     background-color: blue;
     color: white;

     &:hover{
      background-color: rgb(30, 30, 90);
        }
      }

   @media( max-width:1000px){
    box-shadow: 0 0 5px #ccc;
    border-radius: 8px;
    padding: 10px;
    margin-top: 20px;

  
  label{
   
    margin-left: 10px;
    font-weight: bold;
    font-size: 16px;
  }

  .inputPrice{

    width: 50px;
    margin-right: 10px;
    border-radius: 5px;
    outline: 0;
    font-size: 14px;

    &:hover{
      background-color: rgba(220,220,220);
      
    }
  }


  .description{
    width: 100px;
    height: 25px;
    border-radius: 5px;
    outline: 0;
    font-size: 12px;
    &:hover{
      background-color: rgba(220,220,220);
      
    }

  }
   button {
     font-size: 12px;
     border-radius: 8px;
     outline: 0;
     margin-left: 30px;
   }   
     
    }
    @media( max-width:700px){
      display: none;
    }
    
`;