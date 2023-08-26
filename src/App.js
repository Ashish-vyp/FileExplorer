import './App.css';

import React from 'react';
import DirectoryComponent from './components/Directory';
import DirectoryProvider from './containers/DirectoryProvider';

function App() {
  return (
    <DirectoryProvider>
      <DirectoryComponent />
    </DirectoryProvider>
  );
}

export default React.memo(App);
