// App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import RegistrationForm from './components/RegistrationForm.tsx';
import store from './redux/store.ts';
import Step2Form from './components/Step2Form.jsx';
import DataTable from './components/DataTable.jsx';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <RegistrationForm />
        <Step2Form />
        <DataTable />
      </div>
    </Provider>
  );
};

export default App;
