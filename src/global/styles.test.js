import React from "react"
import renderer from "react-test-renderer"
import GlobalStyle from "./styles"

describe("GlobalStyle", () => {
  it("renders properly", () => {
    const tree = renderer.create(<GlobalStyle />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
