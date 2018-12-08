import React from 'react';
import styled from 'styled-components';
import {Modal as ModalNative} from 'react-native';
import {func} from 'prop-types';

// locals
import {Text, FooterBar, Button} from '~/components/shared';

export const ModalScheduleCancel = props => (
  <Modal {...props}>
    <Wrapper>
      <Container>
        <Header>
          <Text weight="600">Confirmação</Text>
        </Header>
        <Body>
          <Text size={15}>Deseja fazer o cancelamento?</Text>
        </Body>
        <ModalFooter>
          <ButtonSuccess onPress={props.onCancel} success>
            <Text>Ok</Text>
          </ButtonSuccess>
          <ButtonCancel danger onPress={props.onClose}>
            <Text>Cancelar</Text>
          </ButtonCancel>
        </ModalFooter>
      </Container>
    </Wrapper>
  </Modal>
);

ModalScheduleCancel.propTypes = {
  onClose: func.isRequired,
  onCancel: func.isRequired
};

// const Wrapper = styled.View`
//   align-items: center;
// `;

const Header = styled.View`
  border-bottom-color: ${props => props.theme.border};
  border-bottom-width: 1px;
  padding-vertical: 10;
  padding-horizontal: 10;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
`;

const Modal = styled(ModalNative)``;

const Wrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Body = styled.View`
  border-color: ${props => props.theme.border};
  align-items: center;
  padding-vertical: 20;
`;

const ModalFooter = FooterBar.extend`
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 0;
  padding-left: 0;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 10;
`;

const ButtonModal = Button.extend`
  width: 50%
  border-radius: 0;
`;

const ButtonCancel = ButtonModal.extend`
  border-bottom-right-radius: 10;
`;

const ButtonSuccess = ButtonModal.extend`
  border-bottom-left-radius: 10;
`;
const Container = styled.View`
  background-color: ${props => props.theme.bgSecondary};
  position: absolute;
  margin-left: 20;
  margin-right: 20;
  top: 40%;
  width: 90%
  height: 20%;
  border-radius: 10;
`;
