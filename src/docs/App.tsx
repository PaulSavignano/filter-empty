import React from 'react';

import SearchProvider from './common/Search/SearchProvider';
import Footer from './Footer';
import Header from './Header';
import routes from './pages';
import Router from './Router';
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
