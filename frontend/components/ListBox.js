import format from 'date-fns/format';
import Link from 'next/link';
import SubHeader from './texts/SubHeader';

const ListBox = ({ data }) => (
  <li className='border border-borderGray rounded-lg px-8 py-4 mb-6'>
    <Link href={`/accounts/${data.id}`}>
      <a>
        <div className='flex flex-row'>
          <span>
            <SubHeader>{data.type}</SubHeader>
            <SubHeader>
              {data.type === 'Credit' &&
                ` - ${format(data.dueDate, 'MMMM dd')}`}
            </SubHeader>
          </span>
          <span className='ml-auto'>
            <SubHeader>
              {data.type === 'Debit' ? 'Balance' : 'Payable'}
            </SubHeader>
          </span>
        </div>
        <div className='flex flex-row'>
          <h2 className='text-2xl text-textGray'>{data.name}</h2>
          <h1 className='ml-auto text-2xl'>
            {data.balance.toLocaleString(undefined, {
              style: 'currency',
              currency: data.currency,
            })}
          </h1>
        </div>
      </a>
    </Link>
  </li>
);

export default ListBox;
