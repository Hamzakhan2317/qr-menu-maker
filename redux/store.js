import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rtkQueryErrorLogger } from "./services/ErrorHandlerMiddleWare/ErrorLogger";
import { api } from "./api";
import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  timeout: null,
  version: 1,
  whitelist: ["auth"],
  // blacklist: ["appointment"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware, rtkQueryErrorLogger),
  // devTools: !import.meta.env.PROD,
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
