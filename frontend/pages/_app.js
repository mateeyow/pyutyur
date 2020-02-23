import { IconContext } from 'react-icons/lib';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/Topbar';
import Breadcrumb, {
  BreadcrumbItem,
} from '../components/breadcrumb/Breadcrumb';
import '../assets/stylesheet/styles.css';

const App = ({ Component, pageProps }) => {
  const { title, breadcrumbs } = Component;

  return (
    <IconContext.Provider value={{}}>
      <div className='grid grid-cols-layout'>
        <Sidebar />
        <div>
          <Topbar title={title}>
            <Breadcrumb>
              {breadcrumbs.map((breadcrumb, idx) => (
                <BreadcrumbItem key={idx} href={breadcrumb.href}>
                  {breadcrumb.title}
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          </Topbar>
          <div className='shadow bg-white border-lineGray m-8 min-h-cover max-h-cover py-8 px-6 overflow-auto'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default App;
