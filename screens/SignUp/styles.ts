import styled from "styled-components/native"
import { Bold, Regular } from "../../components/Text"
import colors from "../../config/colors"

interface SubmitWrapperProps{
    isValid: boolean;
}

interface SocialButtonProps{
    color: string;
}

export const Main = styled.View`
  flex: 1;
  position: relative;
  background: white;
`
export const Content = styled.ScrollView`
  flex: 1;
`
export const ContentForm = styled.View`
  width: 80%;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
`
export const Logo = styled.View`
  justify-content: center;
  align-items: center;
`
export const LogoImage = styled.Image`
  height: 90px;
  resize-mode: contain;
`
export const Label = styled(Regular)`
  width: 100%;
  text-align: center;
  color: ${colors.hintForeground};
  font-size: 14px;
  line-height: 17px;
  margin-top: 30px;
  margin-bottom: 20px;
`
export const InputWrapper = styled.View`
  width: 100%;
  margin-top: -8px;
`
export const PasswordWrapper = styled.View`
  position: relative;
`
export const PasswordToggle = styled.TouchableOpacity`
  width: 24px;
  height: 48px;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 20px;
  bottom: 0;
`
export const SubmitWrapper = styled.View<SubmitWrapperProps>`
  width: 100%;
  margin-top: 15px;
  opacity: ${props => (props.isValid ? 1 : 0.6)};
`
export const SocialWrapper = styled.View`
  justify-content: space-around;
  align-items: center;
  margin-horizontal: 30px;
  width: 60%;
  align-self: center;
  flex-direction: row;
  margin-top: 30px;
`
export const SocialButton = styled.TouchableOpacity<SocialButtonProps>`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  background: ${props => props.color};
`
export const Terms = styled.TouchableOpacity`
  width: 100%;
  border-color: ${colors.border};
  border-top-width: 1px;
  align-items: center;
  justify-content: center;
  padding-vertical: 10px;
  padding-horizontal: 30px;
`
export const TermsText = styled(Regular)`
  font-size: 11px;
  color: ${colors.hintForeground};
  margin-horizontal: 20px;
  text-align: center;
`
export const TermsTextBold = styled(Bold)`
  font-size: 11px;
  color: ${colors.praticantes1};
  margin-horizontal: 20px;
  text-align: center;
`