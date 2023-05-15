import styled from "styled-components/native";
import { Bold } from "../Text";
import colors from "../../config/colors";

export const HeaderTitleText = styled(Bold)`
  flex: 1;
  font-size: 24px;
  line-height: 34px;
  color: ${colors.foreground};
  width: 100%;
  text-align: center;
`