import React from "react"
import renderer from "react-test-renderer"
import CaptionText from "./CaptionText"

describe("CaptionText", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(<CaptionText>Caption Text</CaptionText>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
