import React from "react"
import PropTypes from "prop-types"

class ExternalLink extends React.Component {
  render() {
    return (
      <a href={this.props.href} rel={`noopener noreferrer`} target={this.props.target}>
        {this.props.children}
      </a>
    )
  }
}

ExternalLink.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.any,
}

ExternalLink.defaultProps = {
  target: `_blank`,
}

export default ExternalLink
