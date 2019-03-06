import React from 'react';

import styled from 'styled-components';
import ThemeDefault from "../../themes/ThemeDefault";

const OverlineText = styled.span`
    color: ${(props) => props.theme.neutral['900']};
    font-family: 'Open Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 2rem;
    text-transform: uppercase;
`;

OverlineText.defaultProps = {
    theme: ThemeDefault
};

export default OverlineText;
