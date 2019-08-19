import React from 'react';
import { View, StatusBar, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { createAppContainer } from 'react-navigation';
import NavigationService from 'react-navigation-helpers';
import configureStore from './src/services/redux/store';
import { Navigator } from './src/services/navigation';
// Persistor & Store
const { persistor, store } = configureStore;
/**
 * Ignore some yellowbox warnings. Some of these are for deprecated functions
 * that we haven't gotten around to replacing yet.
 */
YellowBox.ignoreWarnings([
	"componentWillMount is deprecated",
	"componentWillUpdate is deprecated",
	"componentWillReceiveProps is deprecated",
]);

const App = () => {
	const MainNavigator = createAppContainer(Navigator);
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<View style={{ flex: 1 }}>
					<StatusBar barStyle="dark-content" />
					<MainNavigator
						ref={(navigatorRef) => NavigationService.setGlobalLevelNavigator(navigatorRef)}
					/>
				</View>
			</PersistGate>
		</Provider>
	);
};

export default App;
