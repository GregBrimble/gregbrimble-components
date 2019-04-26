import React from "react"
import HR from "./HR"
import renderer from "react-test-renderer"

describe("HR", () => {
  it("renders properly", () => {
    const tree = renderer.create(<HR />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
