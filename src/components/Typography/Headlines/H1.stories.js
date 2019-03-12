import React from "react"

import { storiesOf } from "@storybook/react"

import { text } from "@storybook/addon-knobs"

import H1 from "./H1"

storiesOf("Typography/Headlines", module).add("Headline 1", () => (
  <H1>{text("Text", "Headline 1")}</H1>
))
