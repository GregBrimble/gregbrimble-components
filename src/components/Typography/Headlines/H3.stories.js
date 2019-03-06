import React from 'react';

import {storiesOf} from '@storybook/react';

import {text} from '@storybook/addon-knobs';

import H3 from './H3';

storiesOf('Typography/Headlines', module)
    .add('Headline 3', () => <H3>{text('Text', 'Headline 3')}</H3>);
