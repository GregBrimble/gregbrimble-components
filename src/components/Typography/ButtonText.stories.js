import React from "react"

import { storiesOf } from "@storybook/react"

import { text } from "@storybook/addon-knobs"

import ButtonText from "./ButtonText"

storiesOf("Typography", module).add("Button Text", () => (
  <ButtonText>{text("Text", "Button Text")}</ButtonText>
))
