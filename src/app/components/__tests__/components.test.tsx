import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { SideBarLink } from '..';

describe('Side Bar Link', () => {
    it('renders with the value passed in as prop', () => {
        const testValue = 'About';
        render(<SideBarLink text={testValue} />);

        const component = screen.getByText('About');
        expect(component).not.toBeNull();
    });

    it('renders without a value when not passed', () => {
        render(<SideBarLink text='' />);

        const component = screen.getByTestId('sidebar-link');
        expect(component).toHaveTextContent('');
    });

    it('updates value when props change', () => {
        const { rerender } = render(<SideBarLink text="Initial Value" />);
        expect(screen.getByTestId('sidebar-link')).toHaveTextContent('Initial Value');

        rerender(<SideBarLink text="Updated Value" />);
        expect(screen.getByTestId('sidebar-link')).toHaveTextContent('Updated Value');
    });
});