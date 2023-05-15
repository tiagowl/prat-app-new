import styled from "styled-components/native"
import colors from "../../config/colors"
import { Regular } from "../Text"

interface ButtonProps{
    outline?: boolean;
    height?: number;
}

interface ButtonWrapperTextProps{
    outline?: boolean;
}

export const ButtonWrapper = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${p => (p.outline ? colors.white : colors.praticantes1)};
  border-width: ${p => (p.outline ? 1 : 0)}px;
  border-color: ${colors.praticantes1};
  border-radius: 50px;
  padding-horizontal: 15px;
  height: ${p => p.height}px;
`
export const ButtonWrapperText = styled(Regular)<ButtonWrapperTextProps>`
  font-size: 14px;
  line-height: 17px;
  color: ${p => (p.outline ? colors.praticantes1 : colors.white)};
`