import React from "react"

import { storiesOf } from "@storybook/react"

import { text } from "@storybook/addon-knobs"

import Subtitle1 from "./Subtitle1"

storiesOf("Typography/Subtitles", module).add("Subtitle 1", () => (
  <Subtitle1>{text("Text", "Subtitle 1")}</Subtitle1>
))
