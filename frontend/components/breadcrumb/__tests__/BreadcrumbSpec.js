import React from 'react';
import { render } from '@testing-library/react';
import Breadcrumb, { BreadcrumbItem } from '../Breadcrumb';

describe('#Breadcrumb', () => {
  const consoleError = jest
    .spyOn(console, 'error')
    .mockImplementation(() => {});

  afterEach(() => {
    consoleError.mockReset();
  });

  afterAll(() => {
    consoleError.mockRestore();
  });

  it('should render Breadcrumb component', () => {
    const { getByTestId } = render(
      <Breadcrumb>
        <BreadcrumbItem>A breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    );

    expect(getByTestId('breadcrumb')).toBeInTheDocument();
  });

  it('should show error when passing children that is not BreadcrumbItem', () => {
    const { getByTestId } = render(<Breadcrumb>Error should occur</Breadcrumb>);

    expect(getByTestId('breadcrumb')).not.toHaveTextContent(
      'Error should occur'
    );
    expect(consoleError).toHaveBeenCalledWith(
      'Breadcrumb only accepts BreadcrumbItem as children'
    );
  });
});
