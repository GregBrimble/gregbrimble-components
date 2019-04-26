import React from "react"

import { storiesOf } from "@storybook/react"

import { text } from "@storybook/addon-knobs"

import ExternalLink from "./ExternalLink"

storiesOf("Links", module).add("External Link", () => (
  <ExternalLink href={text("Href", "https://google.com/")}>{text("Text", "Link Text")}</ExternalLink>
))
