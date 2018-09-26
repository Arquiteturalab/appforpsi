import React from 'react';
import styled from 'styled-components';
import {func, object} from 'prop-types';

// Locals
import {
  Wrapper,
  TopBar,
  BackButton,
  Button,
  Text,
  Form,
  KeyboardAvoidingWrapper,
  ScrollWrapper
} from '~/components/shared';

export const Login = ({
  handlerLoginFacebook,
  form,
  registerRef,
  handleSubmit
}) => (
  <KeyboardAvoidingWrapper>
    <TopBar leftComponent={<BackButton />} title="Login" />
    <Wrapper>
      <ScrollWrapper
        contentContainerStyle={contentStyle}
        keyboardShouldPersistTaps="always"
      >
        <FacebookButton onPress={handlerLoginFacebook}>
          <Text inverted>Conectar-se com o Facebook</Text>
        </FacebookButton>
        <Separator>
          <Line />
          <InnerText>Ou</InnerText>
          <Line />
        </Separator>
        <Form
          ref={form => registerRef('formElement', form)}
          {...form}
          onSubmit={handleSubmit}
        />
        <Button success onPress={handleSubmit}>
          <Text>Entrar</Text>
        </Button>
      </ScrollWrapper>
    </Wrapper>
  </KeyboardAvoidingWrapper>
);

Login.propTypes = {
  handlerLoginFacebook: func.isRequired,
  form: object.isRequired,
  registerRef: func.isRequired,
  handleSubmit: func.isRequired
};

const FacebookButton = Button.extend`
  background: #3b5998;
`;

const WrapperBody = styled.View`
  padding-left: 20;
  padding-right: 20;
`;

const contentStyle = {
  paddingTop: 20,
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 20
};

const Separator = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Line = styled.View`
  flex: 1;
  height: 1;
  background: ${props => props.theme.border};
`;

const InnerText = styled.Text`
  margin-left: 10;
  margin-right: 10;
  margin-top: 20;
  margin-bottom: 20;
  color: ${props => props.theme.textSecondary};
`;
