import React from 'react';

import {storiesOf} from '@storybook/react';

import {text} from '@storybook/addon-knobs';

import Subtitle2 from './Subtitle2';

storiesOf('Typography/Subtitles', module)
    .add('Subtitle 2', () => <Subtitle2>{text('Text', 'Subtitle 2')}</Subtitle2>);
