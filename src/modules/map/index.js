import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

const HomeScreen = (props) => {
	const {

	} = props;
	return (
		<View>
			<Text>New Component</Text>
		</View>
	);
};

HomeScreen.propTypes = {
	stars: PropTypes.number,
	ratings: PropTypes.string,
};

HomeScreen.defaultProps = {
	stars: 5,
	ratings: "Hellooo",
};

export default HomeScreen;
