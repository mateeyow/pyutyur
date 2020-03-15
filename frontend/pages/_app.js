import { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/Topbar';
import Breadcrumb, {
  BreadcrumbItem,
} from '../components/breadcrumb/Breadcrumb';
import '../assets/stylesheet/styles.css';
import CreateExpenses, {
  ExpenseContext,
} from '../components/modal/CreateExpenses';

const App = ({ Component, pageProps }) => {
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);
  const { title, breadcrumbs = [] } = Component;

  return (
    <IconContext.Provider value={{}}>
      <ExpenseContext.Provider value={{ isExpenseOpen, setIsExpenseOpen }}>
        <div className='grid grid-cols-layout'>
          <Sidebar />
          <div>
            <Topbar title={title}>
              <Breadcrumb>
                {!!breadcrumbs.length &&
                  breadcrumbs.map((breadcrumb, idx) => (
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
          <CreateExpenses isOpen={isExpenseOpen} onClose={setIsExpenseOpen} />
        </div>
      </ExpenseContext.Provider>
    </IconContext.Provider>
  );
};

export default App;
