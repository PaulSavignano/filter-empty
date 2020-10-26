import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Router from './Router';
import SearchProvider from './common/Search/SearchProvider';
import routes from './routes';
import './App.css';

function App(): React.ReactElement {
  return (
    <SearchProvider routes={routes}>
      <Header />
      <Router />
      <Footer />
    </SearchProvider>
  );
}

export default App;
