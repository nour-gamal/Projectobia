import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Store/Reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import {
	reduxFirestore,
	getFirestore,
	createFirestoreInstance,
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import fbConfig from "./Config/ConfigFB";
import firebase from "firebase/app";

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
		reduxFirestore(fbConfig)
	)
);
//construct required properties

const profileSpecificProps = {
	userProfile: "user",
	useFirestoreForProfile: true,
	enableRedirectHandling: false,
	resetBeforeLogin: false,
};

const newFbconfig = Object.assign(fbConfig, profileSpecificProps);

const rrfProps = {
	firebase,
	config: newFbconfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};
function AuthIsLoaded({ children }) {
	const auth = useSelector((state) => state.firebase.auth);
	if (!isLoaded(auth)) return <div>Loading Screen...</div>;
	return children;
}

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<AuthIsLoaded>
				<App />
			</AuthIsLoaded>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
