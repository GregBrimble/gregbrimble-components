import React from "react"

import { storiesOf } from "@storybook/react"

import { text } from "@storybook/addon-knobs"

import H6 from "./H6"

storiesOf("Typography/Headlines", module).add("Headline 6", () => (
  <H6>{text("Text", "Headline 6")}</H6>
))
