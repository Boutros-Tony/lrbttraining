import '@/styles/globals.scss'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from '../../store/store';

const MyApp = ({ Component, pageProps }) => {
 
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
       
        <Layout Component={Component} pageProps={pageProps} />
      </PersistGate>
      
    </Provider>
  );
}
const Layout = ({ Component, pageProps }) => {
  
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};
export default MyApp;