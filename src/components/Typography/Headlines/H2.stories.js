import React from 'react';

import {storiesOf} from '@storybook/react';

import {text} from '@storybook/addon-knobs';

import H2 from './H2';

storiesOf('Typography/Headlines', module)
    .add('Headline 2', () => <H2>{text('Text', 'Headline 2')}</H2>);
