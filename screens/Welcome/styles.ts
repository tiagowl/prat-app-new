import FastImage from 'expo-fast-image';
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import colors from "../../config/colors";
import { Bold, Medium, Regular } from "../../components/Text";

export const Main = styled.View`
  flex: 1;
  background-color: white;
  align-items: stretch;
`

export const BackgroundImage = styled(FastImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`

export const BackgroundOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
`

export const BackgroundOverlayBlack = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
`

export const Content = styled(SafeAreaView)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
  flex-direction: column;
  justify-content: flex-end;
  margin: 15px;
`

export const ContentBody = styled.View`
  justify-content: flex-end;
  align-items: center;
  padding-vertical: 80px;
`
export const ContentFooter = styled.View`
  justify-content: center;
  align-items: center;
`
export const Logo = styled(FastImage)`
  width: 70%;
  height: 100px;
`
export const Buttons = styled.View`
  width: 80%;
  height: 180px;
  margin-top: 60px;
  justify-content: space-between;
`
export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  border-radius: 50px;
  background: ${colors.praticantes2};
  justify-content: center;
  align-items: center;
`
export const ButtonOutline = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  border-radius: 50px;
  border: 2px solid ${colors.white};
  justify-content: center;
  align-items: center;
`
export const ButtonText = styled(Medium)`
  font-size: 14px;
  line-height: 17px;
  color: ${colors.white};
  text-align: center;
`
export const Terms = styled.Text`
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
`
export const TermsRegular = styled(Regular)`
  font-size: 12px;
  color: ${colors.white};
`
export const TermsBold = styled(Bold)`
  font-size: 12px;
  color: ${colors.white};
`

