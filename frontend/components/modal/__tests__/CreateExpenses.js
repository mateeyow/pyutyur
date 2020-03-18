import React from 'react';
import CreateExpenses from '../CreateExpenses';
import { renderModal } from '../../../utils/testUtils';
import { fireEvent } from '@testing-library/react';

describe('#CreateExpenses', () => {
  it('should render create expenses modal without error', () => {
    const { getByText } = renderModal(
      { isOpen: true, onClose: jest.fn() },
      CreateExpenses
    );

    expect(getByText('New Expense')).toBeInTheDocument();
  });

  it('should remove the modal from the dom', () => {
    const onClose = jest.fn();
    const { rerender, getByTestId, queryByTestId } = renderModal(
      { isOpen: true, onClose },
      CreateExpenses
    );

    expect(getByTestId('modal container')).toBeInTheDocument();

    renderModal({ isOpen: false, onClose }, CreateExpenses, rerender);

    expect(queryByTestId('modal container')).not.toBeInTheDocument();
  });

  it('should call close function when user clicks cancel', () => {
    const onClose = jest.fn();
    const { getByTestId } = renderModal(
      { isOpen: true, onClose },
      CreateExpenses
    );

    fireEvent.click(getByTestId('create expenses cancel button'));

    expect(onClose).toHaveBeenCalled();
  });
});
