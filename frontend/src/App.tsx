import * as React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import ReduxToastr from 'react-redux-toastr';
import configureStore from "./redux/configureStore";
import Roster from "./roster";

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const { store, persistor } = configureStore();
const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Roster />
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-right"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    closeOnToastrClick
                />
            </PersistGate>
        </Provider>
    );
};
export default App;
