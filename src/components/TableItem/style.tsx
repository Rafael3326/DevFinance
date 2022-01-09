import styled from "styled-components";


export const TableLine = styled.tr`

@media( max-width:700px){
    font-size:14px;
}
`;


export const TableColumn = styled.td<{response?:boolean}>`
padding: 10px 0;
 @media(max-width:450px){
     display: ${props => props.response ? 'none': 'table-cell'};
 } 
`;

export const Category= styled.div<{color:string}>`
display: inline-block;
padding: 5px 10px;
border-radius: 5px;
color: #fff;
background-color: ${props => props.color} ;

@media( max-width:450px){
    padding: 5px 5px;
    display: none;
}
`;

export const Value = styled.div<{color:string}>`
color: ${props => props.color};
`;