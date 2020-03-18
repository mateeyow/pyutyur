import { createContext } from 'react';
import DatePicker from 'react-datepicker';
import Modal from './Modal';
import Button from '../Button';

export const ExpenseContext = createContext();

const CreateExpenses = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return false;
  }

  return (
    <Modal title='New Expense' onClose={() => onClose(false)}>
      <div className='pt-2'>
        <label className='block mt-4'>
          <span>Amount</span>
          <input
            type='text'
            className='form-input mt-1 block w-full'
            placeholder='2500'
          />
        </label>
        <label className='block mt-4'>
          <span>Article</span>
          <input
            type='text'
            className='form-input mt-1 block w-full'
            placeholder='Food'
          />
        </label>
        <label className='block mt-4'>
          <span className='block'>Date</span>
          <DatePicker
            className='form-input block mt-1 w-full'
            wrapperClassName='w-full'
            calendarClassName='bg-primary'
          />
        </label>
        <label className='block mt-4'>
          <span className='block'>Description</span>
          <textarea
            className='form-textarea mt-1 block w-full'
            rows='4'
            placeholder='Nasi lemak chicken'
          ></textarea>
        </label>
        <div className='flex justify-end mt-10'>
          <button
            className='uppercase underline text-anchor mr-4 text-sm'
            onClick={() => onClose(false)}
            data-testid='create expenses cancel button'
          >
            Cancel
          </button>
          <Button>Save Expense</Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateExpenses;
