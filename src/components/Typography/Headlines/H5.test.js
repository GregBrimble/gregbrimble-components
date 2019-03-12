import React from "react"
import H5 from "./H5"
import renderer from "react-test-renderer"

describe("H5", () => {
  it("renders properly", () => {
    const tree = renderer.create(<H5>Headline 1</H5>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
