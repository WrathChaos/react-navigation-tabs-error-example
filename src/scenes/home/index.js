import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const HomeScreen = (props) => {
  const {} = props;
  return (
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center',
    }}
    >
      <Text>Home Screen</Text>
    </View>
  );
};

HomeScreen.propTypes = {
};

HomeScreen.defaultProps = {
};

export default HomeScreen;
