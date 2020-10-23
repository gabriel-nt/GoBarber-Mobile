import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  margin: 90px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const BackToSign = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  left: 0;

  bottom: 0;
  background: #312e38;
  border-top-width: 1px;

  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;

  align-items: center;
  flex-direction: row;
`;

export const BackToSignText = styled.Text`
  color: #fff;
  margin-left: 20px;
  font-size: 18px;
  font-family: 'RobotSlab-Regular';
`;
