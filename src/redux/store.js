// // import { createStore, combineReducers } from 'redux';
// import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  configureStore,
  getDefaultMiddleware,
  //   combineReducers,
} from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
// console.log(getDefaultMiddleware());

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReducer),
// });

// const persisteReducer = persistReducer(persistConfig, rootReducer);
// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware: middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });
const store = configureStore({
  //   reducer: persisteReducer,
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);
export default { store, persistor };
