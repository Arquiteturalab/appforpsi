import React from 'react';
import styled from 'styled-components';
import {func} from 'prop-types';
// Locals
import {Wrapper, FooterBar, Button, Text} from '~/components/shared';
export const Information = ({handlerOpenRegister, handlerOpenLogin}) => (
  <Wrapper>
    <WrapperBody>
      <WrapperButton>
        <ButtonSylte borde onPress={() => handlerOpenLogin('client')}>
          <Text inverted>Login</Text>
        </ButtonSylte>
        <ButtonSylte success onPress={() => handlerOpenRegister('client')}>
          <Text inverted>Cadastra-se</Text>
        </ButtonSylte>
      </WrapperButton>
    </WrapperBody>
    <FooterBarStyles>
      <WrapperFooter>
        <Button onPress={() => handlerOpenLogin('doctor')}>
          <Text weight="700" inverted size={12}>
            Logar como Psicologia?
          </Text>
        </Button>
        <Button onPress={() => handlerOpenRegister('doctor')}>
          <Text weight="700" inverted size={12}>
            Junte-se a nós
          </Text>
        </Button>
      </WrapperFooter>
    </FooterBarStyles>
  </Wrapper>
);

Information.propTypes = {
  handlerOpenRegister: func.isRequired,
  handlerOpenLogin: func.isRequired
};

const WrapperFooter = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FooterBarStyles = FooterBar.extend`
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 10;
  padding-left: 10;
  align-items: center;
  justify-content: center;
`;

const WrapperBody = styled.View`
  padding-left: 20;
  padding-right: 20;
`;

const WrapperButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonSylte = Button.extend`
  width: 50%;
  padding-left: 20;
  padding-right: 20;
`;
