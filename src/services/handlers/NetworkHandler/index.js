import React from 'react';
import { connect } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

export class NetworkHandler extends React.Component {
	constructor(props) {
		super(props);
		this.addNetInfoEventListener = this.addNetInfoEventListener.bind(this);
		this.removeNetInfoEventListener = this.removeNetInfoEventListener.bind(this);
		this.handleConnectionChange = this.handleConnectionChange.bind(this);
		this.setNetworkConnectionInfo = this.setNetworkConnectionInfo.bind(this);
		this.disableNetwork = this.disableNetwork.bind(this);
		this.enableNetwork = this.enableNetwork.bind(this);
	}

	componentDidMount() {
		this.addNetInfoEventListener();
	}

	componentWillUnmount() {
		this.removeNetInfoEventListener();
	}

	setNetworkConnectionInfo(network) {
		const { dispatch } = this.props;

		dispatch({
			type: 'SET_NETWORK_CONNECTION_INFO',
			payload: {
				network,
			},
		});
	}

	addNetInfoEventListener() {
		NetInfo.addEventListener('connectionChange', this.handleConnectionChange);
	}

	removeNetInfoEventListener() {
		NetInfo.removeEventListener('connectionChange', this.handleConnectionChange);
	}

	handleConnectionChange(connectionInfo) {
		this.setNetworkConnectionInfo(connectionInfo);

		if (
			connectionInfo.type === 'none'
            || (connectionInfo.type === 'cellular' && connectionInfo.effectiveType === '2g')
		) {
			this.disableNetwork();
		} else if (connectionInfo.type !== 'none' && connectionInfo.effectiveType !== '2g') {
			this.enableNetwork();
		}
	}

	disableNetwork() {
		const { dispatch } = this.props;

		dispatch({
			type: 'disableNetwork',
		});
	}

	enableNetwork() {
		const { dispatch } = this.props;

		dispatch({
			type: 'enableNetwork',
		});
	}

	render() {
		return null;
	}
}

function mapStateToProps(state) {
	return {
		network: state.appState.network,
	};
}

export default connect(mapStateToProps)(NetworkHandler);
