import React from "react"
import Fonts from "./index"
import renderer from "react-test-renderer"

describe("Fonts", () => {
  it("renders properly", () => {
    const tree = renderer.create(<Fonts />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
