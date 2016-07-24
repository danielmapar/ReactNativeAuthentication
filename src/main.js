/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import Welcome from './components/secure/welcome';

const ROUTES = {
  signin: Signin,
  signup: Signup,
  welcome: Welcome
};

class authentication extends Component {
  renderScene(route, navigator) {
    const Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }
  render() {
    return (
      <Navigator
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        style={styles.container}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }
});

export default authentication;
