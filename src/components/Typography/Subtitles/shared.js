import styled from 'styled-components';
import ThemeDefault from "../../../themes/ThemeDefault";

export const Subtitle = styled.h6`
    color: ${(props) => props.theme.neutral['900']};
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
`;

Subtitle.defaultProps = {
    theme: ThemeDefault
};
