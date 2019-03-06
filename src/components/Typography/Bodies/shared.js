import styled from 'styled-components';
import PropTypes from 'prop-types';

import ThemeDefault from "../../../themes/ThemeDefault";

export const Body = styled.p`
    color: ${(props) => props.theme.neutral['900']};
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
`;

Body.defaultProps = {
    theme: ThemeDefault
};
