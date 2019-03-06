import React from 'react';

import {storiesOf} from '@storybook/react';

import {text} from '@storybook/addon-knobs';

import CaptionText from "./CaptionText";

storiesOf('Typography', module)
    .add('Caption Text', () => <CaptionText>{text('Text', 'Caption Text')}</CaptionText>);
