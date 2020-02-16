import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('#Button', () => {
  it('should render the button properly', () => {
    const { getByTestId, container } = render(<Button>Some Button</Button>);

    expect(getByTestId('button')).toBeInTheDocument();
    expect(container).toHaveTextContent('Some Button');
  });

  it('should execute the onClick function props', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button onClick={onClick}>This is a button</Button>
    );

    fireEvent.click(getByTestId('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
