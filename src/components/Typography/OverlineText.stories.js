import React from "react"

import { storiesOf } from "@storybook/react"

import { text } from "@storybook/addon-knobs"

import OverlineText from "./OverlineText"

storiesOf("Typography", module).add("Overline Text", () => (
  <OverlineText>{text("Text", "Overline Text")}</OverlineText>
))
