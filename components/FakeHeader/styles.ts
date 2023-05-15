import styled from "styled-components/native"
import { Bold } from "../Text"
import colors from "../../config/colors"

interface HeaderSideProps{
    side: "left" | "right";
}

export const HeaderSide = styled.View<HeaderSideProps>`
  width: 100%;
  height: 100%;
  max-width: 90px;
  flex-direction: row;
  align-items: center;
  justify-content: ${p => (p.side === 'left' ? 'flex-start' : 'flex-end')};
`
export const HeaderCenter = styled.View`
  flex: 16px;
  height: 100%;
  flex-direction: row;
  align-items: center;
`
export const HeaderButtonText = styled(Bold)`
  color: ${colors.praticantes1};
  font-size: 14px;
`