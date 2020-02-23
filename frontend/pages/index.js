import Head from '../components/Head';

function HomePage() {
  return (
    <div>
      <Head title='Dashboard' />
      Dasboard
    </div>
  );
}

HomePage.title = 'Dashboard';
HomePage.breadcrumbs = [
  {
    title: 'Dashboard',
  },
];

export default HomePage;
