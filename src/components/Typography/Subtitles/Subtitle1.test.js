import React from "react"
import Subtitle1 from "./Subtitle1"
import renderer from "react-test-renderer"

describe("Subtitle1", () => {
  it("renders properly", () => {
    const tree = renderer.create(<Subtitle1>Subtitle 1</Subtitle1>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
