import React from 'react';

import {storiesOf} from '@storybook/react';

import {text} from '@storybook/addon-knobs';

import Body2 from './Body2';

storiesOf('Typography/Bodies', module)
    .add('Body 2', () => <Body2>{text('Text', 'Body 2')}</Body2>);
