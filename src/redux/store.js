import { applyMiddleware, createStore } from 'redux';
<<<<<<< HEAD
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middleware/logger';

import reducer from './reducer';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);
=======
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from './middleware/logger';
import generateId from './middleware/generateId';
import api from './middleware/api';

import reducer from './reducer';

const enhancer = applyMiddleware(thunk, api, generateId, logger);

export default createStore(reducer, composeWithDevTools(enhancer));
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
