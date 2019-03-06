import React from 'react';
import Subtitle2 from './Subtitle2';
import renderer from 'react-test-renderer';

describe('Subtitle2', () => {
    it('renders properly', () => {
        const tree = renderer
            .create(<Subtitle2>Subtitle 2</Subtitle2>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
