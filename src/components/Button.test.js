import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

describe('Button', () => {
    it('renders properly', () => {
        const tree = renderer
            .create(<Button/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
