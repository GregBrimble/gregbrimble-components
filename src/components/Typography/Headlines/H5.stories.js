import React from 'react';

import {storiesOf} from '@storybook/react';

import {text} from '@storybook/addon-knobs';

import H5 from './H5';

storiesOf('Typography/Headlines', module)
    .add('Headline 5', () => <H5>{text('Text', 'Headline 5')}</H5>);
