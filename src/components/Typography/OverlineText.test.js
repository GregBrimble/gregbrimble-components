import React from "react"
import OverlineText from "./OverlineText"
import renderer from "react-test-renderer"

describe("OverlineText", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(<OverlineText>Overline Text</OverlineText>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
