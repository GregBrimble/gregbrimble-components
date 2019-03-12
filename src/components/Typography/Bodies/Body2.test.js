import React from "react"
import Body2 from "./Body2"
import renderer from "react-test-renderer"

describe("Body2", () => {
  it("renders properly", () => {
    const tree = renderer.create(<Body2>Body 2</Body2>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
