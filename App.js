import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './components/navigation/Navigation';

import store from './store/configureStore.js';

// const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
