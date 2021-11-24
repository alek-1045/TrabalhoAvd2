import React from 'react';
import { Avatar } from '../Avatar';
import { 
    Container,
    Content,
    User,
    Greeting,
    UserName,
    Message,
    
} from './styles';

export function Profile() {
    return (
        <Container>
            <Avatar urlImage="https://github.com/alek-1045.png" />
            <Content>
                <User>
                    <Greeting>
                        Olá
                    </Greeting>
                    <UserName>
                        Alex
                    </UserName>
                </User>
                <Message>
                    Em qual hambiente{`\n`}
                    você quer colocar sua planta?
                </Message>
            </Content>
        </Container>
    )
}