import React from "react";
import { TouchableOpacityProps } from 'react-native'
import arrow from '../../../assets/arrow.png';


import { 
    Container,
    IconWrapper,
    Imagem,
    
} from "./styles";

interface Props extends TouchableOpacityProps {
    title?: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <IconWrapper>
                <Imagem
                    source={arrow} 
                    accessibilityLabel="botão"
                />
            </IconWrapper>
           
        </Container>
    )
}