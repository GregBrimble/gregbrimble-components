import React from 'react';
import H4 from './H4';
import renderer from 'react-test-renderer';

describe('H4', () => {
    it('renders properly', () => {
        const tree = renderer
            .create(<H4>Headline 1</H4>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
