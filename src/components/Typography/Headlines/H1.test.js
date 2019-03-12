import React from "react"
import H1 from "./H1"
import renderer from "react-test-renderer"

describe("H1", () => {
  it("renders properly", () => {
    const tree = renderer.create(<H1>Headline 1</H1>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
