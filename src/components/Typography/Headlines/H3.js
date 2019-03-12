import React from "react"

import styled from "styled-components"
import { Headline } from "./shared"

const H3 = props => (
  <Headline
    as={styled.h3`
      font-size: 3rem;
      line-height: 3.125rem;
    `}
    {...props}
  />
)

export default H3
