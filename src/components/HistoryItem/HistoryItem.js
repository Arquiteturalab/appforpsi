import React from 'react';
import styled from 'styled-components';
import {object, func} from 'prop-types';
import moment from 'moment';
// Locals
import {Text, Button, Icon, Image} from '~/components/shared';
import {StatusSchedule} from '~/components';
import {image} from '~/config';
export const HistoryItem = ({item, history, onClick}) => {
  return (
    <Wrapper>
      <ItemButton onPress={onClick}>
        <Left>
          <Avatar source={image.avatar} />
          <WrapperDescription>
            <Text align="left">{history.byId[item.item].doctor.name}</Text>
            <WrapperDate>
              <WrapperSchedule>
                <ItemIcon size={17} color="#43458a" name="ios-calendar" />
                <Text secondary size={12}>
                  {moment(history.byId[item.item].date)
                    .utc()
                    .format('DD/MM/YYYY')}
                </Text>
              </WrapperSchedule>
              <WrapperSchedule>
                <ItemIcon size={17} color="#43458a" name="ios-time" />
                <Text secondary size={12}>
                  {history.byId[item.item].hour}
                </Text>
              </WrapperSchedule>
              <WrapperSchedule>
                <ItemIcon
                  size={17}
                  color="#43458a"
                  name="ios-information-circle-outline"
                />
                <StatusSchedule
                  size={12}
                  status={history.byId[item.item].status}
                />
              </WrapperSchedule>
            </WrapperDate>
          </WrapperDescription>
        </Left>
        <Icon name="ios-arrow-forward" inverted />
      </ItemButton>
    </Wrapper>
  );
};

HistoryItem.propTypes = {
  item: object,
  history: object,
  onClick: func.isRequired
};
const Wrapper = styled.View`
  background-color: ${props => props.theme.bgSecondary};
  border: 1px solid ${props => props.theme.bg};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 15;
  margin-right: 15;
  border-radius: 5;
`;
// #232445

const Left = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ItemButton = Button.extend`
  justify-content: space-between;
  padding-left: 10;
  padding-right: 10;
  padding-top: 20;
  padding-bottom: 20;
`;

const ItemIcon = Icon.extend`
  margin-right: 5;
`;

const WrapperDescription = styled.View`
  padding-left: 10;
  width: 240;
`;
const WrapperSchedule = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Avatar = Image.extend`
  height: 45;
  width: 45;
  border-radius: 20;
`;

const WrapperDate = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10;
`;
