import React from 'react';
import ReactModal from 'react-modal';
import AppProvider from './providers/AppProvider';

import Routes from './routes';
import GlobalStyle from './styles/global';

ReactModal.setAppElement('#root');

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
      <GlobalStyle />
    </AppProvider>
  );
};

export default App;
