import React from 'react';
import Body1 from './Body1';
import renderer from 'react-test-renderer';

describe('Body1', () => {
    it('renders properly', () => {
        const tree = renderer
            .create(<Body1>Body 1</Body1>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
