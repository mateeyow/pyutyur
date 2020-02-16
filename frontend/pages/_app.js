import { IconContext } from 'react-icons/lib';
import '../assets/stylesheet/styles.css';

const App = ({ Component, pageProps }) => (
  <IconContext.Provider value={{}}>
    <Component {...pageProps} />
  </IconContext.Provider>
);

export default App;
