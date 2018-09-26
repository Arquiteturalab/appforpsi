import React from 'react';
import styled from 'styled-components';

// Locals
import {
  Text,
  StatusBarBackground,
  BackButton,
  Image,
  Icon,
  Button
} from '~/components/shared';
import {object} from 'prop-types';

export const TopBarMenu = ({user}) => {
  console.log(user);
  return (
    <MainWrapper>
      <StatusBarBackground />
      <WrapperTop>
        <BackButton modal={true} icon="ios-arrow-down" />
        <Button icon>
          <Icon name="ios-notifications" inverted size={22} />
        </Button>
      </WrapperTop>
      <Wrapper>
        <WrapperBody>
          <WrapperAvatar>
            <Avatar source={{uri: user.data.urlImage}} />
          </WrapperAvatar>
          <WrapperAvatarText>
            <Text align="center" inverted weight="500">
              {user.data.name}
            </Text>
          </WrapperAvatarText>
        </WrapperBody>
      </Wrapper>
    </MainWrapper>
  );
};

TopBarMenu.propTypes = {
  user: object
};

const MainWrapper = styled.View`
  z-index: 2;
  background-color: ${props => props.theme.bgSecondary};
  border-bottom-color: ${props => props.theme.bgSecondary};
`;

const WrapperTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.bgSecondary};
  padding-left: 20;
  padding-right: 20;
  min-height: 53;
  align-items: center;
`;
const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-left: 20;
  padding-right: 20;
  border-width: 1;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  min-height: 130;
`;

const WrapperBody = styled.View`
  align-items: center;
  text-align: center;
`;

const Avatar = Image.extend`
  height: 85;
  width: 85;
  border-radius: 42;
`;

const WrapperAvatar = styled.View`
  margin-bottom: 10;
`;

const WrapperAvatarText = styled.View`
  position: absolute;
  bottom: 20;
  align-items: center;
`;
const WrapperFooter = styled.View`
  height: 40;
`;
