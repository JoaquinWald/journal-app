import React from 'react';
import ReactDOM from 'react-dom/client';

import { JournalApp } from './JournalApp';
import './styles.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <HashRouter>
        <JournalApp />
      </HashRouter>
    </Provider>

  </React.StrictMode>,
)
