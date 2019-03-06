import React from 'react';

import styled from 'styled-components';
import {HeadlineSmall} from './shared';

const H4 = props => <HeadlineSmall as={styled.h4`
    font-size: 2.125rem;
    line-height: 2.5rem;
`} {...props} />;

export default H4;
