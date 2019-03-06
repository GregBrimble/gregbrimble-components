import React from 'react';

import {storiesOf} from '@storybook/react';

import {text} from '@storybook/addon-knobs';

import H4 from './H4';

storiesOf('Typography/Headlines', module)
    .add('Headline 4', () => <H4>{text('Text', 'Headline 4')}</H4>);
