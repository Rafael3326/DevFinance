import styled from "styled-components";



export const Container = styled.div`
 background-color:#fff;
 box-shadow: 0px 0px 5px #ccc;
 border-radius: 10px;
 padding: 20px;
 margin-top: -40px;
 display: flex;
 align-items: center;

 @media( max-width:1000px){

    font-size: 14px;
 }
`;

export const MonthArea = styled.div`
flex: 1;
display: flex;
align-items: center;
`;
export const MonthArrow = styled.div`
width:40px;
text-align: center;
font-size: 25px;
cursor: pointer;
@media( max-width:700px){

width: 15px;
font-size: 14px;
}
`;
export const ResumeArea = styled.div`
flex:2;
display: flex;

`;
export const MonthTitle= styled.div`
flex: 1;
text-align: center;
@media( max-width:700px){

font-size: 14px;
}

`;

