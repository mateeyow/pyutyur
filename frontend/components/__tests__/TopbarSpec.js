import React from 'react';
import { render } from '@testing-library/react';
import Topbar from '../Topbar';

describe('#Topbar', () => {
  it('should render the Topbar component', () => {
    const { getByTestId } = render(<Topbar />);

    expect(getByTestId('topbar')).toBeInTheDocument();
  });

  it('should be able to render the title component', () => {
    const { getByTestId } = render(<Topbar title='This is a title' />);

    expect(getByTestId('topbar')).toHaveTextContent('This is a title');
  });
});
