import * as React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from "./redux/configureStore";
import Roster from "./roster";
const { store, persistor } = configureStore();
const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Roster />
            </PersistGate>
        </Provider>
    );
};
export default App;
