import React from 'react';
import { fireEvent } from '@testing-library/react';
import Modal from '../Modal';
import { renderModal } from '../../../utils/testUtils';

describe('#Modal', () => {
  it('should render the modal component without error', () => {
    const { getByTestId, getByText } = renderModal(
      {
        title: 'This is the title',
        children: 'This is the text',
      },
      Modal
    );

    expect(getByTestId('modal container')).toBeInTheDocument();
    expect(getByText('This is the title')).toBeInTheDocument();
    expect(getByText('This is the text')).toBeInTheDocument();
  });

  it('should call onClose function on button click', () => {
    const onClose = jest.fn();
    const { getByTestId } = renderModal(
      {
        title: 'Close this modal',
        onClose,
      },
      Modal
    );

    const closeBtn = getByTestId('modal close button');

    fireEvent.click(closeBtn);

    expect(closeBtn).toBeInTheDocument();
    expect(onClose).toHaveBeenCalled();
  });
});
