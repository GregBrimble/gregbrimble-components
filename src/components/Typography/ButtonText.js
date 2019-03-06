import React from 'react';

import styled from 'styled-components';
import ThemeDefault from "../../themes/ThemeDefault";

const ButtonText = styled.span`
    color: ${(props) => props.theme.neutral['900']};
    font-family: 'Open Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 2.25rem;
    text-transform: uppercase;
`;

ButtonText.defaultProps = {
    theme: ThemeDefault
};

export default ButtonText;
