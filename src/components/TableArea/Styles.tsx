import styled from "styled-components";
import { isPropertySignature } from "typescript";


export const Table = styled.table<{responsivo:boolean}>`
width: 100%;
background-color: #fff;
padding: 20px;
box-shadow: 0px 0px 5px #ccc;
border-radius: 10px;
margin-top: 20px;
display: ${props=>props.responsivo ? 'none':'table-cell'};
`;

export const TableHeadColumn = styled.th<{ width?:number,response?:boolean}>`
padding: 10px 0;
text-align: left;
width: ${props=> props.width?`${props.width}px`: 'auto'};
 @media( max-width:450px){
    display: ${props=> props.response? 'none':'table-cell'};
    
 }
`;