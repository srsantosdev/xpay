import React from 'react';
import ReactModal from 'react-modal';
import { AuthProvider } from './providers/AuthProvider';

import Routes from './routes';
import GlobalStyle from './styles/global';

ReactModal.setAppElement('#root');

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
