import { useNavigation, useNavigationState } from '@react-navigation/core';
import React from 'react';
import { 
    Image
} from 'react-native';

import Ilustration from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { 
    Container, 
    Title,
    SubTitle,
    Content 
} from './styles';

export function Signin() {
    const navigation = useNavigation();

    function handleSignin(){
        navigation.navigate('Home')
    }
    return (
        <Container>
            <Content>
                <Title>
                    Gerencie {`\n`}
                    suas plantas de {`\n`}
                    forma fácil
                </Title>
                <Image source={Ilustration} />
                <SubTitle>
                    Não esqueça mais de regar suas {`\n`} 
                    plantas.
                    Nós cuidamos de lembrar você {`\n`} 
                    sempre que precisar.
                </SubTitle>
                <ButtonIcon 
                    activeOpacity={0.7}
                    disabled={false}
                    onPress={handleSignin}
                />
            </Content>    
        </Container>
    )
}
