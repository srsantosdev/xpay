import React from 'react';
import ReactModal from 'react-modal';

import Routes from './routes';
import GlobalStyle from './styles/global';

ReactModal.setAppElement('#root');

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;
