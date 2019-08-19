import React from 'react';
import { connect } from 'react-redux';

export class LocationHandler extends React.Component {
	constructor(props) {
		super(props);
		this.getLocationPermission = this.getLocationPermission.bind(this);
	}

	componentDidMount() {
		this.getLocationPermission();
	}

	getLocationPermission() {
		const { dispatch } = this.props;

		dispatch({
			type: 'checkAndRequestPermission',
			payload: {
				permission: 'location',
			},
			meta: {
				nextAction: {
					type: 'getDeviceLocation',
				},
			},
		});
	}

	render() {
		return null;
	}
}

export default connect()(LocationHandler);
