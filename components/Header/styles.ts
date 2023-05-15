import styled from "styled-components/native"
import colors from "../../config/colors"
import { SafeAreaView } from "react-native-safe-area-context"

interface WrapperHeaderProps{
    border: boolean;
}

export const Wrapper = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
`
export const WrapperHeader = styled.View<WrapperHeaderProps>`
  flex: 1;
  height: 60px;
  flex-direction: row;
  border-bottom-width: ${p => (p.border === false ? 0 : 1)}px;
  border-bottom-color: ${colors.border};
  align-items: center;
  justify-content: space-between;
`