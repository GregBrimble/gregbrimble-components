import React from "react"

import styled from "styled-components"
import { Headline } from "./shared"

const H1 = props => (
  <Headline
    as={styled.h1`
      font-size: 6rem;
      line-height: 6rem;
    `}
    {...props}
  />
)

export default H1
