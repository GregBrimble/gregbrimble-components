import React from "react"
import H6 from "./H6"
import renderer from "react-test-renderer"

describe("H6", () => {
  it("renders properly", () => {
    const tree = renderer.create(<H6>Headline 1</H6>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
