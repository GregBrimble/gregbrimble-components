import styled from "styled-components"
import ThemeDefault from "../../../themes/ThemeDefault"

export const Headline = styled.h1`
  color: ${props => props.theme.neutral["900"]};
  font-family: Lora, serif;
  font-weight: 400;
`

Headline.defaultProps = {
  theme: ThemeDefault,
}

export const HeadlineSmall = styled(Headline)`
  font-weight: 700;
`
