import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/reducer"
import { productReducer } from "./product/reducer";
import { categoriesReducer } from "./categories/reducer";
import { transactionReducer } from "./transaction/reducer";
import { detailTransactionReducer } from "./detailTransaction/reducer";
import { 
  persistStore,
  persistReducer,
  PERSIST,
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PURGE,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const reducers = combineReducers({
  auth: authReducer,
  product: productReducer,
  categories: categoriesReducer,
  transaction: transactionReducer,
  detailTransaction: detailTransactionReducer,
});

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
  key: "data",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) => {
    return defaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE],
      },
      thunk: true,
    });
  },
});

export const persistedStore = persistStore(store)