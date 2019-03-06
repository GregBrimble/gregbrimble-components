import React from 'react';

import styled from 'styled-components';
import {HeadlineSmall} from './shared';

const H5 = props => <HeadlineSmall as={styled.h5`
    font-size: 1.5rem;
    line-height: 2rem;
`} {...props} />;

export default H5;
