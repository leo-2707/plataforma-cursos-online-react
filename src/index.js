import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./styles/styles.scss"

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { getAllSpecialities } from './redux/actionCreators';

store.dispatch(getAllSpecialities());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
