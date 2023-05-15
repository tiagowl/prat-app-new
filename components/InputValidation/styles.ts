import styled from 'styled-components/native'
import { Light } from '../Text'
import colors from '../../config/colors'

const { danger } = colors

export const InputValidation = styled(Light)`
  font-size: 12px;
  margin-horizontal: 15px;
  margin-top: 2px;
  color: ${danger};
`