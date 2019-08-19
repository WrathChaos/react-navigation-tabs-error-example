/* eslint-disable react/no-typos */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import NavigationService from 'react-navigation-helpers';

// NOTE: It is important that this component renders after our scenes
export class AndroidBackHandler extends React.Component {
	constructor(props) {
		super(props);

		this.handleBackPress = this.handleBackPress.bind(this);
		this.exitApp = this.exitApp.bind(this);
		this.navigate = this.navigate.bind(this);

		this.state = {};
	}

	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	}

	handleBackPress() {
		const { scene } = this.props;
		const isHome = !scene || scene === 'home';

		if (isHome) {
			this.exitApp();
		} else {
			this.navigate(); // pop the scene
		}

		return true;
	}

	exitApp() {
		BackHandler.exitApp();
	}

	navigate(page, props) {
		NavigationService.navigate(page, props);
	}

	render() {
		return null;
	}
}

AndroidBackHandler.PropTypes = {
	scene: PropTypes.string
};


function mapStateToProps(state) {
	return {
		scene: state.navigation.scene,
	};
}

export default connect(mapStateToProps)(AndroidBackHandler);
