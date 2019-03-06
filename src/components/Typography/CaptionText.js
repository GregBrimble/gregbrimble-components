import React from 'react';

import styled from 'styled-components';
import ThemeDefault from "../../themes/ThemeDefault";

const CaptionText = styled.span`
    color: ${(props) => props.theme.neutral['900']};
    font-family: 'Open Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;
`;

CaptionText.defaultProps = {
    theme: ThemeDefault
};

export default CaptionText;
