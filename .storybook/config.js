import {addDecorator, addParameters, configure} from '@storybook/react';
import {create} from '@storybook/theming';
import {withA11Y} from '@storybook/addon-a11y';
import '@storybook/addon-console';
import {withKnobs} from '@storybook/addon-knobs';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
import Theme9 from "../src/themes/Theme9";
import ThemeDefault from "../src/themes/ThemeDefault";

const req = require.context('../src', true, /\.stories\.js$/);

addParameters({
    options: {
        theme: create({
            brandImage: 'logo.svg',
            brandTitle: 'gregbrimble-components',
            brandUrl: 'https://github.com/GregBrimble/gregbrimble-components',
        })
    }
});

import {withInfo} from '@storybook/addon-info';
addDecorator(
    withInfo({
        header: false,
        inline: true
    })
);

addDecorator(withA11Y);
addDecorator(withKnobs);
addDecorator(withThemesProvider([
    ThemeDefault,
    Theme9
]));

configure(() => {
    req.keys().forEach(filename => req(filename));
}, module);
