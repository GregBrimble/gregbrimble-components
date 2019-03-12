import React from "react"
import H2 from "./H2"
import renderer from "react-test-renderer"

describe("H1", () => {
  it("renders properly", () => {
    const tree = renderer.create(<H2>Headline 2</H2>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
