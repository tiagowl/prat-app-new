import styled from "styled-components/native";
import colors from "../../config/colors";

interface InputComponentProps{
    height?: number;
    maxHeight?: number;
    invalid?: boolean;
    disabled?: boolean;
    multiline?: boolean;
}

export const InputComponent = styled.TextInput<InputComponentProps>`
  width: 100%;
  height: 100%;
  border-width: 1px;
  margin-top: 15px;
  padding-vertical: 0px;
  padding-horizontal: 20px;
  height: ${props => props.height || 48}px;
  max-height: ${props => props.maxHeight || 160}px;
  border-radius: 50px;
  color: ${p => (p.invalid ? colors.danger : colors.foreground)};
  border-color: ${p => (p.invalid ? colors.danger : colors.border)};
  ${p =>
    p.multiline &&
    `
    border-radius: 5px;
  `}
  ${p =>
    p.disabled &&
    `
    color: ${colors.border};
    border-color: ${colors.border};
  `}
`