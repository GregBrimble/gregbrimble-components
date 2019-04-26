import React from "react"
import styled from "styled-components"
import ThemeDefault from "../../themes/ThemeDefault"

const HR = styled(() => <hr align={`left`} />)`
  height: 6px;
  border: none;
  color: ${props => props.theme.supporting[0][`400`]};
  background-color: ${props => props.theme.supporting[0][`400`]};
  width: ${200 / 3}%;
`

HR.defaultProps = {
  theme: ThemeDefault,
}

export default HR
