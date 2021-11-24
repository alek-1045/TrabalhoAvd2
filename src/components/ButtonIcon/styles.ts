import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 350px;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
`

export const IconWrapper = styled.View`
    width: 350px;
    height: 50px;
    justify-content: center;
    align-items: center;
    
`

export const Imagem = styled.Image`
    width: 24px;
    height: 24px;
`

/* export const Title = styled.Text`
    flex: 1px;
    font-size: 15px;
    text-align: center;
    color: ${({ theme }) => theme.colors.heading};
` */