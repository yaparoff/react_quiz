import { createStore } from 'redux';
import reducer from './reducers/questions';

const createAppStore = () => {
  return createStore(
    reducer
  )
};

export default createAppStore;