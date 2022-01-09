import * as C from './styles'



type Props = {
    title:string;
    value: number;
    color?:string;
    response?:boolean
    
}


export const ResumeItem = ({title,value,color,response }:Props) =>{

    return (
        <C.Container response={response}>
            <C.Title>{title}</C.Title>
            <C.Info color={color} >R$ {value}</C.Info>
        </C.Container>
    )
}