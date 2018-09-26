import React from 'react';
import {object, func, bool} from 'prop-types';

// Locals
import {
  Wrapper,
  TopBar,
  BackButton,
  Form,
  ScrollWrapper,
  KeyboardAvoidingWrapper,
  FooterBar,
  Button,
  Text
} from '~/components/shared';

export const Register = ({forms, registerRef, handleSubmit, isLoading}) => (
  <KeyboardAvoidingWrapper>
    <TopBar leftComponent={<BackButton />} title="Cadastra-se" />
    <Wrapper loading={isLoading}>
      <ScrollWrapper
        contentContainerStyle={contentStyle}
        keyboardShouldPersistTaps="always"
      >
        <Form
          ref={form => registerRef('customersForm', form)}
          {...forms.customersForm}
          onSubmit={handleSubmit}
        />
      </ScrollWrapper>
    </Wrapper>
    <FooterBar>
      <Button success onPress={handleSubmit}>
        <Text inverted>Pronto</Text>
      </Button>
    </FooterBar>
  </KeyboardAvoidingWrapper>
);

Register.propTypes = {
  forms: object.isRequired,
  registerRef: func.isRequired,
  handleSubmit: func.isRequired,
  isLoading: bool.isRequired
};

const contentStyle = {
  paddingTop: 20,
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 20
};
