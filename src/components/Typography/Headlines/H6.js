import React from 'react';

import styled from 'styled-components';
import {HeadlineSmall} from './shared';

const H6 = props => <HeadlineSmall as={styled.h6`
    font-size: 1.25rem;
    line-height: 2rem;
`} {...props} />;

export default H6;
