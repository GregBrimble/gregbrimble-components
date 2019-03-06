import React from 'react';

import styled from 'styled-components';
import {Headline} from './shared';

const H2 = props => <Headline as={styled.h2`
    font-size: 3.75rem;
    line-height: 3.75rem;
`} {...props} />;

export default H2;
