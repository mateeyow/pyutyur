import { useRouter } from 'next/router';
import Head from '../../components/Head';
import Button from '../../components/Button';
import TitleText from '../../components/texts/TitleText';

const Description = ({ children }) => <td className='pr-6 pb-8'>{children}</td>;
const Data = ({ children }) => <td className='pb-8'>{children}</td>;

const AccountDetails = () => {
  const router = useRouter();
  const [id] = router?.query?.slug || [];

  return (
    <>
      <Head title='Yow' />
      <div className='flex flex-row items-center'>
        <TitleText className='text-3xl'>Main Wallet</TitleText>
        <Button className='ml-auto'>Edit Account</Button>
      </div>
      <table className='table-auto mt-12'>
        <tbody>
          <tr>
            <Description>Account Type:</Description>
            <Data>Debit</Data>
          </tr>
          <tr className='pt-6'>
            <Description>Balance:</Description>
            <Data>3000</Data>
          </tr>
          <tr>
            <Description>Payment Date:</Description>
            <Data>15th of every month</Data>
          </tr>
        </tbody>
      </table>
    </>
  );
};

AccountDetails.title = 'Accounts Management';
AccountDetails.breadcrumbs = [
  {
    title: 'Dashboard',
    href: '/',
  },
  {
    title: 'Accounts Management',
    href: '/accounts',
  },
  {
    title: 'Main Wallet',
  },
];

export default AccountDetails;
