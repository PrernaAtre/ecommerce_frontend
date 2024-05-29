import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { authReducer } from "./reducers/authSlice";
import { baseApi } from "./baseApi";

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath] : baseApi.reducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware) as any,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
