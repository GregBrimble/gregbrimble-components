import React from 'react';

import {storiesOf} from '@storybook/react';

import {text} from '@storybook/addon-knobs';
import {linkTo} from '@storybook/addon-links';

import H1 from './Headlines/H1';
import H2 from './Headlines/H2';
import H3 from './Headlines/H3';
import H4 from './Headlines/H4';
import H5 from './Headlines/H5';
import H6 from './Headlines/H6';
import Subtitle1 from "./Subtitles/Subtitle1";
import Subtitle2 from "./Subtitles/Subtitle2";
import Body2 from "./Bodies/Body2";
import Body1 from "./Bodies/Body1";
import ButtonText from "./ButtonText";
import CaptionText from "./CaptionText";
import OverlineText from "./OverlineText";


function generateElement(element, content) {
    return <div><element.tag onClick={linkTo(element.section, element.name)}>{content || element.name}</element.tag></div>
}

storiesOf('Typography', module)
    .add('All', () => {
        const content = text('Text', '');
        const elements = [
            {tag: H1, section: 'Typography/Headlines', name: 'Headline 1'},
            {tag: H2, section: 'Typography/Headlines', name: 'Headline 2'},
            {tag: H3, section: 'Typography/Headlines', name: 'Headline 3'},
            {tag: H4, section: 'Typography/Headlines', name: 'Headline 4'},
            {tag: H5, section: 'Typography/Headlines', name: 'Headline 5'},
            {tag: H6, section: 'Typography/Headlines', name: 'Headline 6'},
            {tag: Subtitle1, section: 'Typography/Subtitles', name: 'Subtitle 1'},
            {tag: Subtitle2, section: 'Typography/Subtitles', name: 'Subtitle 2'},
            {tag: Body1, section: 'Typography/Bodies', name: 'Body 1'},
            {tag: Body2, section: 'Typography/Bodies', name: 'Body 2'},
            {tag: ButtonText, section: 'Typography', name: 'Button Text'},
            {tag: CaptionText, section: 'Typography', name: 'Caption Text'},
            {tag: OverlineText, section: 'Typography', name: 'Overline Text'}
        ];

        return (
            <div>
                {elements.map(function (element, i) {
                    return generateElement(element, content)
                })}
            </div>
        )
    }, {info: `Click on an element to navigate to its page.`});
