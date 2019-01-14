import { applyMiddleware, createStore, Store } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";

interface IConfigureStoreProps {
    store: Store;
    persistor: any;
}

export default function configureStore(): IConfigureStoreProps {
    const persistConfig = {
        key: "root",
        storage
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
    const persistor = persistStore(store);
    return { store, persistor };
}
