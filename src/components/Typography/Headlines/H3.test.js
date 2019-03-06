import React from 'react';
import H3 from './H3';
import renderer from 'react-test-renderer';

describe('H3', () => {
    it('renders properly', () => {
        const tree = renderer
            .create(<H3>Headline 1</H3>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
