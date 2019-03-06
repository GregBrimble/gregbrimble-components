import React from 'react';
import {storiesOf} from '@storybook/react';

import * as README from '../../README.md';

storiesOf('Welcome', module).add('to gregbrimble-components', () => {}, {
    info: {
        header: false,
        text: README,
        source: false
    },
    options: {
        showAddonPanel: false
    }
});
