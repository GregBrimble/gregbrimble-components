import React from "react"
import ExternalLink from "./ExternalLink"
import renderer from "react-test-renderer"

describe("ExternalLink", () => {
  it("renders properly", () => {
    const tree = renderer.create(<ExternalLink href={`https://google.com/`}>Link Text</ExternalLink>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
