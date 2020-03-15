import React from 'react';
import { render } from '@testing-library/react';
import TitleText from '../TitleText';

describe('#TitleText', () => {
  it('should render the TitleText component', () => {
    const { getByTestId } = render(<TitleText>This is a title</TitleText>);

    const component = getByTestId('title text');
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent('This is a title');
  });
});
