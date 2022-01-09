import styled from "styled-components";
import { isPropertySignature } from "typescript";


export const Container = styled.div <{response?:boolean}>`
 flex:1;
 @media(max-width:450px){
    display: ${props => props.response ? 'none':'block'}
 }
`;

export const Title= styled.div`
text-align: center;
font-weight: bold;
color: #888;
margin-bottom: 5px;
@media(max-width:450px){
   font-size: 17px;
 }

`;

export const Info= styled.div<{color?:string}>`
text-align: center;
font-weight: bold;
color: ${props=>  props.color? props.color:'#000'};
@media( max-width:700px){

font-size: 14px;
}
`;
