import React from 'react';

import {storiesOf} from '@storybook/react';

import {text} from '@storybook/addon-knobs';

import Body1 from './Body1';

storiesOf('Typography/Bodies', module)
    .add('Body 1', () => <Body1>{text('Text', 'Body 1')}</Body1>);
