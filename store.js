// store.js
import reducer from './components/reducer';
import { createStoreHook } from 'react-redux'; 

const store = createStore(reducer);

export default store;
