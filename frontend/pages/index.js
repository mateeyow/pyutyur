import Button from '../components/Button';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/Topbar';
import Breadcrumb, {
  BreadcrumbItem,
} from '../components/breadcrumb/Breadcrumb';

function HomePage() {
  return (
    <>
      <div className='grid grid-cols-layout'>
        <Sidebar />
        <div>
          <Topbar title='Accounts Management'>
            <Breadcrumb>
              <BreadcrumbItem href='/'>Dashboard</BreadcrumbItem>
              <BreadcrumbItem>Accounts Management</BreadcrumbItem>
            </Breadcrumb>
          </Topbar>
          <div className='shadow bg-white border-lineGray m-8 min-h-cover max-h-cover py-8 px-6 overflow-auto'>
            <Button>Add new expense</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
