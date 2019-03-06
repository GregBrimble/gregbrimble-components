import React from 'react';
import {storiesOf} from '@storybook/react';

import * as README from '../../README.md';

storiesOf('Welcome', module).add('to gregbrimble-components', () => {}, {
    info: {
        text: README,
        source: false
    },
    options: {
        showAddonPanel: false
    }
});
