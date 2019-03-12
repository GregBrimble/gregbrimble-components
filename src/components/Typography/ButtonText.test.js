import React from "react"
import ButtonText from "./ButtonText"
import renderer from "react-test-renderer"

describe("ButtonText", () => {
  it("renders properly", () => {
    const tree = renderer.create(<ButtonText>Button Text</ButtonText>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
