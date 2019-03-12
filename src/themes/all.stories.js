import React from 'react';

import {storiesOf} from '@storybook/react';

import Theme9 from './Theme9';
import H1 from "../components/Typography/Headlines/H1";
import CaptionText from "../components/Typography/CaptionText";
import ThemeDefault from "./ThemeDefault";


function generateElement(colors) {
    return (
        <div style={{
            display: 'grid',
            gridAutoRows: '80px',
            gridGap: '10px',
            gridTemplateColumns: '15% 15% 15% 15% 15%'
        }}>
            {Object.keys(colors).sort().reverse().map(function(weight, i) {
                return (
                    <div style={{display: 'flex', height: '100%', flexDirection: 'column'}}>
                        <div style={{width: '100%', height: '100%', backgroundColor: colors[weight]}} />
                        <CaptionText>{weight} - {colors[weight]}</CaptionText>
                    </div>
                )
            })}
        </div>
    )
}

const themes = [
    Theme9,
    ThemeDefault
];

themes.map(function(theme, i) {
    storiesOf('Themes', module)
        .add(theme.name, () => {

            return (
                <div>
                    <H1>Primary</H1>
                    {generateElement(theme.primary)}
                    <H1>Neutral</H1>
                    {generateElement(theme.neutral)}
                    <H1>Supporting</H1>
                    {theme.supporting.map(function(group, i) {
                        return (
                            <div style={{marginBottom: '60px'}}>
                                {generateElement(group)}
                            </div>
                        )
                    })}
                </div>
            )
        });
});
