import React from 'react';
import {render} from '@testing-library/react';
import Blog from './Blog';

describe('Blog', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        // @ts-ignore
        render(<Blog/>, div);
    });

    it('renders an h1 with the correct text', () => {
        const {getByText} = render(<Blog/>);
        const heading = getByText('Hello world!');
        expect(heading).toBeInTheDocument();
    });
});
